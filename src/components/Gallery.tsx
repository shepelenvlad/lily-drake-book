type GalleryItem = {
	file: string;
	caption: string;
	alt: string;
	scrollStart?: boolean;
	eager?: boolean;
};

// Order and captions match the original static site exactly.
// Picture captions/alt text are identical in both the English and Spanish versions,
// so this list is shared between both locales.
const items: GalleryItem[] = [
	{ file: "1.webp", caption: "Belmor", alt: "Belmor", eager: true },
	{ file: "2.webp", caption: "Enzo", alt: "Enzo" },
	{ file: "9.webp", caption: "Simon Tarr", alt: "Simon Tarr", scrollStart: true },
	{ file: "4.webp", caption: "Leila in Iseland", alt: "Leila" },
	{ file: "5.webp", caption: "Leila", alt: "Leila" },
	{ file: "6.webp", caption: "Muhammad Jr.", alt: "Muhammad Jr." },
	{ file: "18.webp", caption: "Damian", alt: "Damian" },
	{ file: "7.webp", caption: "New York", alt: "New York" },
	{ file: "8.webp", caption: "Enzo in Canada", alt: "Enzo in Canada" },
	{ file: "3.webp", caption: "Enzo in Iseland", alt: "Enzo in Iseland" },
	{ file: "10.webp", caption: "New Monreal", alt: "New Monreal" },
	{ file: "11.webp", caption: "Theo", alt: "Theo" },
	{ file: "12.webp", caption: "Laviana", alt: "Laviana" },
	{ file: "13.webp", caption: "Simon Tarr", alt: "Simon Tarr" },
	{ file: "17.webp", caption: "Damian", alt: "Damian" },
	{ file: "14.webp", caption: "Muhammad the Elder", alt: "Muhammad the Elder" },
	{ file: "15.webp", caption: "Vulcarión", alt: "Vulcarión" },
	{ file: "16.webp", caption: "New York", alt: "Sarah-Jane Smith" },
	{ file: "20.webp", caption: "Theo in Iseland", alt: "Theo in Iseland" },
	{ file: "19.webp", caption: "Muhammad the Elder", alt: "Muhammad the Elder" },
];

export default function Gallery() {
	return (
		<div className="gallery">
			<section className="carousel">
				{items.map((item, i) => (
					<div key={i} className={item.scrollStart ? "scroll-start" : undefined}>
						<p>{item.caption}</p>
						<div className="img">
							<img
								src={`/images-web/pictures/${item.file}`}
								alt={item.alt}
								loading={item.eager ? undefined : "lazy"}
							/>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}
