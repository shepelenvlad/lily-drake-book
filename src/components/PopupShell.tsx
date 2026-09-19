"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Gallery from "@/components/Gallery";
import LangSetter from "@/components/LangSetter";

const ARTICLE_IDS = ["intro", "work", "about", "contact"] as const;
type ArticleId = (typeof ARTICLE_IDS)[number];
type Locale = "en" | "es";

// Same timing as the original Dimension template's main.js, so the
// slide/fade feels identical — only the trigger (pathname vs. hash) changed.
const DELAY = 325;

const buyLink =
	"https://libreria.editorialnumancia.com/literatura/380-tiempo-de-dragones-despierta-mi-heroe.html";

function getLocale(pathname: string): Locale {
	return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

function getArticleId(pathname: string): ArticleId | null {
	const local = pathname.startsWith("/es/") ? pathname.slice(3) : pathname; // "/es/intro" -> "/intro"
	const id = local.slice(1);
	return (ARTICLE_IDS as readonly string[]).includes(id) ? (id as ArticleId) : null;
}

export default function PopupShell() {
	const pathname = usePathname();
	const router = useRouter();

	const locale = getLocale(pathname);
	const prefix = locale === "es" ? "/es" : "";
	const homePath = locale === "es" ? "/es" : "/";
	const path = (id: ArticleId) => `${prefix}/${id}`;

	const lockedRef = useRef(false);
	const didInitRef = useRef(false);
	const activeIdRef = useRef<ArticleId | null>(null);

	// ---- Ported from assets/js/main.js ($main._show / $main._hide),
	// ---- swapping jQuery + location.hash for plain DOM + the router.
	function showArticle(id: ArticleId, initial = false) {
		const body = document.body;
		const header = document.getElementById("header");
		const footer = document.getElementById("footer");
		const main = document.getElementById("main");
		const article = document.getElementById(id);
		if (!header || !footer || !main || !article) return;

		if (lockedRef.current || initial) {
			body.classList.add("is-switching");
			body.classList.add("is-article-visible");
			ARTICLE_IDS.forEach((aid) => document.getElementById(aid)?.classList.remove("active"));
			header.style.display = "none";
			footer.style.display = "none";
			main.style.display = "";
			article.style.display = "";
			article.classList.add("active");
			lockedRef.current = false;
			activeIdRef.current = id;
			window.setTimeout(() => body.classList.remove("is-switching"), initial ? 1000 : 0);
			return;
		}

		lockedRef.current = true;

		if (body.classList.contains("is-article-visible")) {
			const currentId = activeIdRef.current;
			const currentArticle = currentId ? document.getElementById(currentId) : null;
			currentArticle?.classList.remove("active");

			window.setTimeout(() => {
				if (currentArticle) currentArticle.style.display = "none";
				article.style.display = "";

				window.setTimeout(() => {
					article.classList.add("active");
					activeIdRef.current = id;
					window.scrollTo(0, 0);

					window.setTimeout(() => {
						lockedRef.current = false;
					}, DELAY);
				}, 25);
			}, DELAY);
		} else {
			body.classList.add("is-article-visible");

			window.setTimeout(() => {
				header.style.display = "none";
				footer.style.display = "none";
				main.style.display = "";
				article.style.display = "";

				window.setTimeout(() => {
					article.classList.add("active");
					activeIdRef.current = id;
					window.scrollTo(0, 0);

					window.setTimeout(() => {
						lockedRef.current = false;
					}, DELAY);
				}, 25);
			}, DELAY);
		}
	}

	function hideArticle() {
		const body = document.body;
		const header = document.getElementById("header");
		const footer = document.getElementById("footer");
		const main = document.getElementById("main");
		const id = activeIdRef.current;
		const article = id ? document.getElementById(id) : null;
		if (!header || !footer || !main) return;
		if (!body.classList.contains("is-article-visible")) return;

		if (lockedRef.current) {
			body.classList.add("is-switching");
			article?.classList.remove("active");
			if (article) article.style.display = "none";
			main.style.display = "none";
			footer.style.display = "";
			header.style.display = "";
			body.classList.remove("is-article-visible");
			lockedRef.current = false;
			body.classList.remove("is-switching");
			activeIdRef.current = null;
			window.scrollTo(0, 0);
			return;
		}

		lockedRef.current = true;
		article?.classList.remove("active");

		window.setTimeout(() => {
			if (article) article.style.display = "none";
			main.style.display = "none";
			footer.style.display = "";
			header.style.display = "";

			window.setTimeout(() => {
				body.classList.remove("is-article-visible");
				activeIdRef.current = null;
				window.scrollTo(0, 0);

				window.setTimeout(() => {
					lockedRef.current = false;
				}, DELAY);
			}, 25);
		}, DELAY);
	}

	// Drive open/close purely off the current URL, so back/forward and
	// direct links to /intro, /work, /about, /contact (or their /es/...
	// counterparts) all just work.
	useEffect(() => {
		const targetId = getArticleId(pathname);

		if (!didInitRef.current) {
			didInitRef.current = true;

			const main = document.getElementById("main");
			if (main) main.style.display = "none";
			ARTICLE_IDS.forEach((aid) => {
				const el = document.getElementById(aid);
				if (el) el.style.display = "none";
			});

			if (targetId) showArticle(targetId, true);
			return;
		}

		if (targetId && targetId !== activeIdRef.current) {
			showArticle(targetId);
		} else if (!targetId && activeIdRef.current) {
			hideArticle();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	// Click outside the popup, or Escape, closes it — same as the original.
	useEffect(() => {
		function onBodyClick() {
			if (document.body.classList.contains("is-article-visible")) {
				router.push(homePath);
			}
		}
		function onKeyUp(event: KeyboardEvent) {
			if (event.key === "Escape" && document.body.classList.contains("is-article-visible")) {
				router.push(homePath);
			}
		}
		document.body.addEventListener("click", onBodyClick);
		window.addEventListener("keyup", onKeyUp);
		return () => {
			document.body.removeEventListener("click", onBodyClick);
			window.removeEventListener("keyup", onKeyUp);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router, homePath]);

	function navTo(target: string) {
		return (event: React.MouseEvent) => {
			event.preventDefault();
			event.stopPropagation();
			router.push(target);
		};
	}

	function stop(event: React.MouseEvent) {
		event.stopPropagation();
	}

	const closePopup = navTo(homePath);

	return (
		<div id="wrapper">
			{locale === "es" && <LangSetter lang="es" />}

			{/* Header */}
			<header id="header">
				<div className="head">
					<div className="logo">
						<span>
							<img src="/images-web/icon2.webp" alt="" />
						</span>
					</div>
					<div className="location">
						<ul className="actions">
							<li>
								<a href="/">EN</a>
							</li>
							<li>
								<a href="/es">ES</a>
							</li>
						</ul>
					</div>
				</div>
				<nav>
					<ul>
						<li>
							<a href={path("intro")} onClick={navTo(path("intro"))}>
								{locale === "es" ? "Leer ahora" : "Read now"}
							</a>
						</li>
						<li>
							<a href={path("work")} onClick={navTo(path("work"))}>
								{locale === "es" ? "Galería" : "Gallery"}
							</a>
						</li>
						<li>
							<a href={path("about")} onClick={navTo(path("about"))}>
								{locale === "es" ? "Sobre el autor" : "About the author"}
							</a>
						</li>
						<li>
							<a href={path("contact")} onClick={navTo(path("contact"))}>
								{locale === "es" ? "Contacto" : "Contact"}
							</a>
						</li>
					</ul>
				</nav>
				<div className="content">
					<div className="inner">
						<h1>Lily Drake</h1>
						{locale === "es" ? (
							<>
								<h2>
									<a href={buyLink}>
										Tiempo de Dragones:
										<br />
										Despierta, mi Héroe
									</a>
								</h2>
								<p>
									Dos volúmenes. Dos mundos entrelazados por el destino.
									<br />
									Cada decisión de un héroe: una chispa del futuro.
									<br />
									La oscuridad, el fuego, los dragones.
									<br />
									Todo cobra vida y respira en el corazón de esta epopeya.
								</p>
							</>
						) : (
							<>
								<h2>
									<a href={buyLink}>
										The Age of Dragons:
										<br />
										Awake, My Hero
									</a>
								</h2>
								<p>
									Two volumes. Two worlds entwined by fate.
									<br />
									Every choice of a hero — a spark of the future. <br />
									Darkness, fire, dragons.
									<br />
									Everything lives and breathes in the heart of this epic.
								</p>
							</>
						)}
					</div>
					<div className="inner">
						<a className="book-link" href={path("intro")} onClick={navTo(path("intro"))}>
							<img src="/images-web/book.webp" alt="" />
						</a>
					</div>
				</div>
			</header>

			{/* Main */}
			<div id="main">
				{/* Intro */}
				<article id="intro" onClick={stop}>
					{locale === "es" ? (
						<>
							<h2 className="major">Libros</h2>
							<span className="image main">
								<img src="/images-web/books.webp" alt="" />
							</span>
							<h3>Descripción</h3>
							<p>
								Cuando el mundo se sumió en la oscuridad y el cielo se tiñó de ceniza, la civilización se derrumbó bajo el peso de sus propias ambiciones.
								<br />
								Simon Tarr, un genio y un tirano, convirtió la sabiduría en un arma y sumió a la Tierra en la oscuridad.
								<br />
								Pero donde nace la oscuridad, arde el fuego.
								<br />
								Leila —portadora del antiguo Principio del Ciclo de la Vida— junto con Theo, Enzo, Lavienna y otros héroes, lidera una nueva era a través de tormentas, bosques, volcanes y misterios, donde cada elección da forma al futuro.
								<br />
								Desde la Isla de las Flores de Fuego hasta los dragones despertados, desde los ángeles caídos hasta el barco de la esperanza, el Anhelika: las batallas, los descubrimientos, el amor y la fe se entrelazan en una única corriente de acontecimientos.
								<br />
								Así comienza la saga del Retorno y el Despertar del Tándem.
								<br />
								Una saga épica en dos volúmenes.
								<br />
								El comienzo de una era no es más que el primer paso hacia una nueva historia.
							</p>
							<h3>Cómpralo ahora en Libreria Numancia</h3>
							<p>
								<a href={buyLink}>United Kingdom</a>
								<br />
								<a href={buyLink}>Spain</a>
								<br />
								<a href={buyLink}>French Republic</a>
								<br />
								<a href={buyLink}>Germany</a>
								<br />
								<a href={buyLink}>Canada</a>
								<br />
								<a href={buyLink}>United States of America (USA)</a>
							</p>
							<h3>Lee el avance</h3>
						</>
					) : (
						<>
							<h2 className="major">Books</h2>
							<span className="image main">
								<img src="/images-web/books.webp" alt="" />
							</span>
							<h3>Description</h3>
							<p>
								When the world went dark and the sky turned to ash, civilization collapsed under the weight of its own ambitions.
								<br />
								Simon Tarr, a genius and tyrant, turned wisdom into a weapon, plunging the earth into shadow.
								<br />
								But where darkness is born, fire blazes.
								<br />
								Leila — bearer of the ancient Principle of the Life Cycle — together with Theo, Enzo, Lavienna, and other heroes, leads a new era through storms, forests, volcanoes, and mysteries, where every choice sparks the future.
								<br />
								From the Fireflower Isle to awakened dragons, from fallen angels to the ship of hope, Anhelika — battles, discoveries, love, and faith intertwine into a single current of events.
								<br />
								Thus rises the saga of the Return and the Awakening of the Tandem.
								<br />
								An epic saga in two volumes.
								<br />
								The beginning of one era is only the first step into a new story.
							</p>
							<h3>Buy now on Libreria Numancia</h3>
							<p>
								<a href={buyLink}>United Kingdom</a>
								<br />
								<a href={buyLink}>Spain</a>
								<br />
								<a href={buyLink}>French Republic</a>
								<br />
								<a href={buyLink}>Germany</a>
								<br />
								<a href={buyLink}>Canada</a>
								<br />
								<a href={buyLink}>United States of America (USA)</a>
							</p>
							<h3>Read the teaser</h3>
						</>
					)}
					{/* Elfsight Flipbook | Untitled Flipbook */}
					<script src="https://elfsightcdn.com/platform.js" async></script>
					<div className="elfsight-app-99ab2db0-4ced-4878-afdc-c4737e3e2863" data-elfsight-app-lazy></div>
					<div className="close" onClick={closePopup}>
						Close
					</div>
				</article>

				{/* Work */}
				<article id="work" onClick={stop}>
					{locale === "es" ? (
						<>
							<h2>
								Despierta, mi Héroe
								<br />
								Tiempo de Dragones Galería
							</h2>
							<h3 style={{ fontStyle: "italic" }}>
								Colección visual oficial del universo de «Tiempo de Dragones»
								<br />
								Artista: <br />
								Lily Drake
								<br />
								Shepelenko Bogdan.
							</h3>
						</>
					) : (
						<>
							<h2>
								Awake, My Hero
								<br />
								The Dragon Age Gallery
							</h2>
							<h3 style={{ fontStyle: "italic" }}>
								Official visual collection of the “Dragon Age” universe
								<br />
								Artist: <br />
								Lily Drake
								<br />
								Shepelenko Bogdan.
							</h3>
						</>
					)}

					<Gallery />

					<p>
						<br />
					</p>

					{locale === "es" ? (
						<>
							<h3 style={{ fontStyle: "italic" }}>
								Cuando la luz se ha desvanecido, un nuevo camino
								<br />
								surge — solo visible sobre el lienzo.
							</h3>
							<p>
								Ya has leído la historia… pero aún no ha terminado.
								<br />
								Abre sus puertas.
								<br />
								Entra en The Awakening Gallery.
							</p>
							<p>
								Un mundo suspendido entre la sombra y el fuego, donde cada cuadro es un capítulo vivo:
								<br />
								Los dragones surcan cielos brumosos.
								<br />
								Abissariel emerge de las profundidades ancestrales.
								<br />
								Las líneas rojas laten, uniendo destinos más fuertes que el acero.
								<br />
								Acércate…
								<br />
								La sombra de Simon se agita, inquieta.
								<br />
								El aliento de Leila enciende el aire.
								<br />
								Theo mira más allá del velo de la realidad.
								<br />
								Abissariel asciende desde el abismo, imparable como el propio destino.
								<br />
								Esto no es una galería.
								<br />
								Esto es una era.
								<br />
								Entra. La historia despierta.
							</p>
							<p>
								Bienvenidos al reino donde el libro continúa en el arte.
								<br />
								Cada cuadro es un capítulo, cada pincelada un trazo del destino, cada sombra un latido de un mundo más allá de la luz.
							</p>
						</>
					) : (
						<>
							<h3 style={{ fontStyle: "italic" }}>
								After the light has faded, a new path
								<br />
								emerges — visible only on canvas.
							</h3>
							<p>
								You’ve read the story… yet it is not over.
								<br />
								It opens its doors.
								<br />
								Enter The Awakening Gallery.
							</p>
							<p>
								A world suspended between shadow and fire, where every painting is a living chapter:
								<br />
								Dragons tear through misted skies.
								<br />
								Abissariel rises from ancient depths.
								<br />
								Red lines pulse, binding destinies stronger than steel.
								<br />
								Step closer —<br />
								Simon’s shadow stirs, restless.
								<br />
								Leila’s breath ignites the air.
								<br />
								Theo peers beyond the veil of reality.
								<br />
								Abissariel ascends from the abyss, unstoppable as fate itself.
								<br />
								This is not a gallery.
								<br />
								This is an Era.
								<br />
								Step in. The story awakens.
							</p>
							<p>
								Welcome to the realm where the book continues in art.
								<br />
								Every painting is a chapter, every brushstroke a trace of destiny, every shadow a pulse of a world after light.
							</p>
						</>
					)}
					<div className="close" onClick={closePopup}>
						Close
					</div>
				</article>

				{/* About */}
				<article id="about" onClick={stop}>
					{locale === "es" ? (
						<>
							<h2 className="major">Sobre el autor</h2>
							<div className="lily">
								<div className="left">
									<h3>Lily Drake</h3>
									<p>
										Lili Drake es una autora contemporánea cuya obra nace en la convergencia entre la literatura, la investigación científica y el pensamiento de ingeniería. Sus novelas se distinguen por un profundo rigor analítico, una sólida coherencia interna y una extraordinaria atención al detalle, logrando que sus mundos de ficción resulten tan verosímiles como si obedecieran a las leyes de una realidad propia.
										<br />
										Lili Drake es la autora de la saga de dark fantasy Tiempo de Dragones. Despierta, mi Héroe. Hasta la fecha se han publicado dos volúmenes de una serie que continúa en desarrollo. La obra está disponible tanto en formato digital como impreso y ha sido traducida a varios idiomas, encontrando progresivamente lectores en distintos países.
										<br />
										Además de su labor literaria, Lili Drake desarrolla una amplia actividad científica y técnica. Sus áreas de investigación abarcan la criminología, la sociología, la gestión, la resolución de conflictos y las tecnologías de la información. Es autora de numerosos artículos científicos, programas universitarios y monografías. Entre ellas destaca La delincuencia como sistema. Un intento de análisis crítico, publicada en 2006 y dedicada al estudio de la delincuencia como un fenómeno social complejo.
										<br />
										Su experiencia profesional en el ámbito de las tecnologías de la información también forma parte esencial de su proceso creativo. El universo de Tiempo de Dragones no fue concebido como un simple escenario para la narración, sino como un modelo integral de un posible futuro, donde la sociedad, la tecnología, la naturaleza, las nuevas formas de vida y los propios personajes responden a una misma lógica interna. Muchas de las soluciones tecnológicas descritas en la saga se basan en conceptos reales de ingeniería y pueden entenderse como proyectos técnicamente viables.
										<br />
										Algunas de las ideas y escenarios planteados en la saga encontraron, de manera inesperada, paralelismos con acontecimientos que comenzaron a desarrollarse después de que la obra fuera escrita. Nunca fue intención de la autora anticipar el futuro. Más bien, la saga nació como una reflexión sobre la evolución de la sociedad, la tecnología y la naturaleza humana, lo que ha llevado a que determinadas hipótesis literarias adquieran, con el paso del tiempo, una sorprendente resonancia con la realidad.
										<br />
										Lili Drake rara vez habla de sí misma. Prefiere que sean el mundo que ha creado, sus personajes, sus decisiones, sus desafíos y su camino quienes ocupen el centro de la atención. Por ello, este sitio web está dedicado principalmente al universo de Tiempo de Dragones: un espacio donde los lectores podrán descubrir con mayor profundidad a sus protagonistas, la estructura de este mundo, sus tecnologías, su historia, las nuevas criaturas que lo habitan y muchos de los detalles que en las novelas se revelan solo de forma gradual.
										<br />
										La saga continúa creciendo. Con cada nuevo libro, el universo de Tiempo de Dragones se expande, manteniéndose fiel al principio que define la obra de Lili Drake: incluso la imaginación más audaz resulta convincente cuando se sustenta en el conocimiento, la lógica y una profunda comprensión de la naturaleza humana.
									</p>
									<p style={{ fontStyle: "italic", fontWeight: 600 }}>
										Ella es la Guardiana de las Palabras.
										<br />
										Abre un libro y ya no serás solo un lector.
										<br />
										— Lily Drake
										<br />
									</p>
								</div>
								<div className="right">
									<img src="/images-web/lily.webp" alt="" />
								</div>
							</div>
						</>
					) : (
						<>
							<h2 className="major">About the author</h2>
							<div className="lily">
								<div className="left">
									<h3>Lily Drake</h3>
									<p>
										Lili Drake is a contemporary author whose work brings together imaginative storytelling, scientific research, and engineering thinking. Her novels are distinguished by their analytical depth, internal consistency, and meticulous attention to detail, creating fictional worlds that feel authentic, coherent, and governed by their own natural laws.
										<br />
										Lili Drake is the author of the dark fantasy saga The Age of Dragons. Awake, My Hero. Two books in the series have been published to date, with the story continuing to unfold. The saga is available in both print and digital editions and has been translated into several languages, gradually reaching readers around the world.
										<br />
										Alongside her literary career, Lili Drake has an extensive background in science and engineering. Her academic work spans criminology, sociology, conflict studies, management, and information technology. She is the author of numerous scholarly articles, university curricula, and academic monographs. Among her most notable works is Crime as a System: An Attempt at Critical Analysis, published in 2006, which examines crime as a complex social phenomenon.
										<br />
										Her professional experience in information technology has also shaped her creative approach. The world of The Age of Dragons was never intended to serve merely as a backdrop for the story. Instead, it was conceived as a comprehensive model of a possible future, where society, technology, nature, emerging forms of life, and the characters themselves are all connected through a unified internal logic. Many of the technological concepts described throughout the saga are grounded in real engineering principles and could be developed as independent technical projects.
										<br />
										Some of the ideas and scenarios presented in the saga later found unexpected parallels in real-world events that unfolded after the books had already been written. Predicting the future was never the author&apos;s intention. Rather, the series represents an exploration of the patterns that shape society, technology, and human nature—allowing certain fictional concepts to resonate with reality in surprising ways over time.
										<br />
										Lili Drake rarely speaks about herself. She prefers to keep the focus on the world she has created, its characters, the choices they face, the challenges they overcome, and the journeys they undertake. For this reason, this website is dedicated primarily to the universe of The Age of Dragons—a place where readers can explore its characters, worldbuilding, technologies, history, creatures, and many of the details that are revealed only gradually throughout the novels.
										<br />
										The saga continues to grow. With each new book, the universe of The Age of Dragons expands while remaining true to the principle that defines Lili Drake&apos;s work: even the boldest imagination becomes convincing when it is built upon knowledge, logic, and a profound understanding of human nature.
										<br />
									</p>
									<p style={{ fontStyle: "italic", fontWeight: 600 }}>
										She is the Keeper of Words.
										<br />
										Open a book, and you are no longer just a reader.
										<br />
										— Lily Drake
										<br />
									</p>
								</div>
								<div className="right">
									<img src="/images-web/lily.webp" alt="" />
								</div>
							</div>
						</>
					)}
					<div className="close" onClick={closePopup}>
						Close
					</div>
				</article>

				{/* Contact */}
				<article id="contact" onClick={stop}>
					<h2 className="major">{locale === "es" ? "Contacto" : "Contact"}</h2>
					<form method="post" action="https://formspree.io/f/mgoowjrn">
						<div className="fields">
							<div className="field half">
								<label htmlFor="name">{locale === "es" ? "Nombre" : "Name"}</label>
								<input type="text" name="name" id="name" required />
							</div>
							<div className="field half">
								<label htmlFor="email">{locale === "es" ? "Correo electrónico" : "Email"}</label>
								<input type="text" name="email" id="email" required />
							</div>
							<div className="field">
								<label htmlFor="message">{locale === "es" ? "Mensaje" : "Message"}</label>
								<textarea name="message" id="message" rows={4}></textarea>
							</div>
						</div>
						<ul className="actions">
							<li>
								<input type="submit" value="Send Message" className="primary" />
							</li>
							<li>
								<input type="reset" value="Reset" />
							</li>
						</ul>
					</form>
					<ul className="icons">
						<li>
							<a href="#" className="icon brands fa-twitter">
								<span className="label">Twitter</span>
							</a>
						</li>
						<li>
							<a href="#" className="icon brands fa-facebook-f">
								<span className="label">Facebook</span>
							</a>
						</li>
						<li>
							<a href="#" className="icon brands fa-instagram">
								<span className="label">Instagram</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.amazon.co.uk/stores/Lily-Drake/author/B0G44FWFHS?_encoding=UTF8&ref=ap_rdr&shoppingPortalEnabled=true"
								className="icon brands fa-amazon"
							>
								<span className="label">Kindle Books</span>
							</a>
						</li>
					</ul>
					<div className="close" onClick={closePopup}>
						Close
					</div>
				</article>
			</div>

			{/* FAB */}
			<a
				href="https://libreria.editorialnumancia.com/literatura/380-tiempo-de-dragones-despierta-mi-heroe.html?hl=ru-RU"
				className="fb-button"
			>
				{locale === "es" ? (
					<>
						Comprar ahora
						<br />
						Por €29.90
					</>
				) : (
					<>
						Buy Now
						<br />
						For €29.90
					</>
				)}
			</a>

			{/* Footer */}
			<footer id="footer">
				<p className="copyright">
					{locale === "es" ? "© 2026. Diseño: De Lily Drake." : "© 2026. Design: By Lily Drake."}
				</p>
			</footer>
		</div>
	);
}
