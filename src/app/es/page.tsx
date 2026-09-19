import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import LangSetter from "@/components/LangSetter";

export const metadata: Metadata = {
	title: "Tiempo de Dragones: Despierta, mi Héroe | Lily Drake — Saga de Fantasía Oscura",
	description:
		"Descubre Tiempo de Dragones: Despierta, mi Héroe, la épica saga de dark fantasy de Lily Drake en dos volúmenes. Dragones despertados, ángeles caídos y una nueva era tras el colapso de la civilización. Lee el avance, explora la galería oficial y cómpralo ahora.",
	keywords: [
		"Lily Drake",
		"Tiempo de Dragones",
		"Despierta mi Héroe",
		"saga dark fantasy",
		"libros de dragones",
		"fantasía épica",
		"novela de fantasía oscura",
		"galería de arte de dragones",
		"Leila",
		"Theo",
		"Simon Tarr",
		"Enzo",
		"Lavienna",
	],
	authors: [{ name: "Lily Drake" }],
	robots: "index, follow",
	alternates: {
		canonical: "/es",
		languages: {
			en: "/",
			es: "/es",
			"x-default": "/",
		},
	},
	openGraph: {
		type: "website",
		url: "/es",
		title: "Tiempo de Dragones: Despierta, mi Héroe | Lily Drake",
		description:
			"Cuando el mundo se sumió en la oscuridad y la civilización se derrumbó, el fuego se alzó frente a la sombra. Una épica saga dark fantasy en dos volúmenes de Lily Drake: dragones, ángeles caídos y héroes que forjan una nueva era.",
		images: [
			{
				url: "/images-web/book.webp",
				alt: "Despierta, mi Héroe — portada de Tiempo de Dragones",
			},
		],
		locale: "es_ES",
		alternateLocale: ["en_US"],
		siteName: "Lily Drake Books",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tiempo de Dragones: Despierta, mi Héroe | Lily Drake",
		description:
			"Una épica saga dark fantasy de dragones, ángeles caídos y héroes que renacen de las cenizas de un mundo roto. Descubre el universo de Tiempo de Dragones.",
		images: ["/images-web/book.webp"],
	},
	other: {
		"book:author": "Lily Drake",
		"book:release_date": "2026",
	},
};

// Structured data intentionally mirrors the original site's Spanish page,
// which described the Book/Person entities in English (inLanguage: "en").
const bookJsonLd = {
	"@context": "https://schema.org",
	"@type": "Book",
	name: "The Age of Dragons: Awake, My Hero",
	isbn: "979-13-88281-78-5",
	author: {
		"@type": "Person",
		name: "Lily Drake",
		url: "https://lily-drake-books.uk/",
		sameAs: ["https://www.amazon.co.uk/stores/Lily-Drake/author/B0G44FWFHS"],
	},
	url: "https://lily-drake-books.uk/",
	image: "https://lily-drake-books.uk/images-web/book.webp",
	description:
		"Discover The Age of Dragons: Awake, My Hero — an epic two-volume dark fantasy saga by Lily Drake. A world of dragons, fallen angels, and heroes forging a new era after civilization's collapse.",
	genre: "Dark Fantasy",
	inLanguage: "en",
	datePublished: "2026",
	bookFormat: "https://schema.org/Paperback",
	numberOfVolumes: "2",
	publisher: {
		"@type": "Organization",
		name: "Editorial Numancia",
		url: "https://libreria.editorialnumancia.com/",
	},
	offers: {
		"@type": "Offer",
		url: "https://libreria.editorialnumancia.com/literatura/380-tiempo-de-dragones-despierta-mi-heroe.html",
		priceCurrency: "EUR",
		price: "29.90",
		availability: "https://schema.org/InStock",
	},
};

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Lily Drake",
	alternateName: "Lili Drake",
	url: "https://lily-drake-books.uk/",
	image: "https://lily-drake-books.uk/images-web/lily.webp",
	jobTitle: "Author",
	description:
		"Lily Drake is a contemporary author of the dark fantasy saga The Age of Dragons: Awake, My Hero, combining imaginative storytelling with scientific and engineering thinking.",
	sameAs: ["https://www.amazon.co.uk/stores/Lily-Drake/author/B0G44FWFHS"],
};

const buyLink =
	"https://libreria.editorialnumancia.com/literatura/380-tiempo-de-dragones-despierta-mi-heroe.html";

export default function HomeEs() {
	return (
		<>
			<LangSetter lang="es" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
			/>

			<div id="wrapper">
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
								<a href="#intro">Leer ahora</a>
							</li>
							<li>
								<a href="#work">Galería</a>
							</li>
							<li>
								<a href="#about">Sobre el autor</a>
							</li>
							<li>
								<a href="#contact">Contacto</a>
							</li>
						</ul>
					</nav>
					<div className="content">
						<div className="inner">
							<h1>Lily Drake</h1>
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
						</div>
						<div className="inner">
							<a className="book-link" href="#intro">
								<img src="/images-web/book.webp" alt="" />
							</a>
						</div>
					</div>
				</header>

				{/* Main */}
				<div id="main">
					{/* Intro */}
					<article id="intro">
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
						{/* Elfsight Flipbook | Untitled Flipbook */}
						<h3>Lee el avance</h3>
						<script src="https://elfsightcdn.com/platform.js" async></script>
						<div
							className="elfsight-app-99ab2db0-4ced-4878-afdc-c4737e3e2863"
							data-elfsight-app-lazy
						></div>
					</article>

					{/* Work */}
					<article id="work">
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

						<Gallery />

						<p>
							<br />
						</p>
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
					</article>

					{/* About */}
					<article id="about">
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
					</article>

					{/* Contact */}
					<article id="contact">
						<h2 className="major">Contacto</h2>
						<form method="post" action="https://formspree.io/f/mgoowjrn">
							<div className="fields">
								<div className="field half">
									<label htmlFor="name">Nombre</label>
									<input type="text" name="name" id="name" required />
								</div>
								<div className="field half">
									<label htmlFor="email">Correo electrónico</label>
									<input type="text" name="email" id="email" required />
								</div>
								<div className="field">
									<label htmlFor="message">Mensaje</label>
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
					</article>
				</div>

				{/* FAB */}
				<a
					href="https://libreria.editorialnumancia.com/literatura/380-tiempo-de-dragones-despierta-mi-heroe.html?hl=ru-RU"
					className="fb-button"
				>
					Comprar ahora
					<br />
					Por €29.90
				</a>

				{/* Footer */}
				<footer id="footer">
					<p className="copyright">© 2026. Diseño: De Lily Drake.</p>
				</footer>
			</div>
		</>
	);
}
