import type { Metadata, Viewport } from "next";

export const siteUrl = "https://lily-drake-books.uk";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	icons: {
		icon: [
			{ url: "/images-web/favicon.ico" },
			{ url: "/images-web/icon2.webp", type: "image/webp" },
		],
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Ported 1:1 from the original static site's stylesheets */}
				<link rel="stylesheet" href="/assets/css/main.css" />
				<noscript>
					<link rel="stylesheet" href="/assets/css/noscript.css" />
				</noscript>
			</head>
			<body className="is-preload">
				{/* Preloader */}
				<div id="preloader">
					<div className="jumper"></div>
				</div>

				{children}

				{/* BG */}
				<div id="bg"></div>

				{/* Scripts — order matches the original site exactly */}
				<script src="/assets/js/jquery.min.js"></script>
				<script src="/assets/js/browser.min.js"></script>
				<script src="/assets/js/breakpoints.min.js"></script>
				<script src="/assets/js/util.js"></script>
				<script src="/assets/js/main.js"></script>
			</body>
		</html>
	);
}
