import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
	title: "The Age of Dragons: Awake, My Hero | Lily Drake — Dark Fantasy Saga",
	description:
		"Discover The Age of Dragons: Awake, My Hero — an epic two-volume dark fantasy saga by Lily Drake. A world of dragons, fallen angels, and heroes forging a new era after civilization's collapse. Read the teaser, explore the official gallery, and buy now.",
	keywords: [
		"Lily Drake",
		"The Age of Dragons",
		"Awake My Hero",
		"dark fantasy saga",
		"dragon fantasy books",
		"epic fantasy novel",
		"fantasy book series",
		"dragon art gallery",
		"Leila",
		"Theo",
		"Simon Tarr",
		"dystopian fantasy",
		"fantasy author",
	],
	authors: [{ name: "Lily Drake" }],
	robots: "index, follow",
	alternates: {
		canonical: "/",
		languages: {
			en: "/",
			es: "/es",
			"x-default": "/",
		},
	},
	openGraph: {
		type: "website",
		url: "/",
		title: "The Age of Dragons: Awake, My Hero | Lily Drake",
		description:
			"When the world went dark and civilization collapsed, fire rose to meet the shadow. An epic two-volume dark fantasy saga of dragons, heroes, and a new era — by Lily Drake.",
		images: [
			{
				url: "/images-web/book.webp",
				alt: "Awake, My Hero — The Age of Dragons book cover",
			},
		],
		locale: "en_US",
		alternateLocale: ["es_ES"],
		siteName: "Lily Drake Books",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Age of Dragons: Awake, My Hero | Lily Drake",
		description:
			"An epic dark fantasy saga of dragons, fallen angels, and heroes rising from the ashes of a broken world. Discover the universe of The Age of Dragons.",
		images: ["/images-web/book.webp"],
	},
	other: {
		"book:author": "Lily Drake",
		"book:release_date": "2026",
	},
};

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

export default function Home() {
	return (
		<>
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
								<a href="#intro">Read now</a>
							</li>
							<li>
								<a href="#work">Gallery</a>
							</li>
							<li>
								<a href="#about">About the author</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</nav>
					<div className="content">
						<div className="inner">
							<h1>Lily Drake</h1>
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
						{/* Elfsight Flipbook | Untitled Flipbook */}
						<h3>Read the teaser</h3>
						<script src="https://elfsightcdn.com/platform.js" async></script>
						<div
							className="elfsight-app-99ab2db0-4ced-4878-afdc-c4737e3e2863"
							data-elfsight-app-lazy
						></div>
					</article>

					{/* Work */}
					<article id="work">
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

						<Gallery />

						<p>
							<br />
						</p>
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
					</article>

					{/* About */}
					<article id="about">
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
					</article>

					{/* Contact */}
					<article id="contact">
						<h2 className="major">Contact</h2>
						<form method="post" action="https://formspree.io/f/mgoowjrn">
							<div className="fields">
								<div className="field half">
									<label htmlFor="name">Name</label>
									<input type="text" name="name" id="name" required />
								</div>
								<div className="field half">
									<label htmlFor="email">Email</label>
									<input type="text" name="email" id="email" required />
								</div>
								<div className="field">
									<label htmlFor="message">Message</label>
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
					Buy Now
					<br />
					For €29.90
				</a>

				{/* Footer */}
				<footer id="footer">
					<p className="copyright">© 2026. Design: By Lily Drake.</p>
				</footer>
			</div>
		</>
	);
}
