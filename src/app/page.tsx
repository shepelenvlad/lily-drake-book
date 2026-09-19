import type { Metadata } from "next";

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
			{/* The actual page markup (header, popup articles, footer) now lives in
			    <PopupShell />, rendered once from the root layout so it survives
			    client-side navigation to /intro, /work, /about, /contact. */}
		</>
	);
}
