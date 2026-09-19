import type { Metadata } from "next";

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

export default function HomeEs() {
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
			{/* The actual page markup (header, popup articles, footer) now lives in
			    <PopupShell />, rendered once from the root layout so it survives
			    client-side navigation to /es/intro, /es/work, /es/about, /es/contact. */}
		</>
	);
}
