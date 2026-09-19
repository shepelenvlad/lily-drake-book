import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre el autor | Lily Drake",
	description:
		"Conoce a Lily Drake, autora de la saga de dark fantasy Tiempo de Dragones: Despierta, mi Héroe.",
	alternates: {
		canonical: "/es/about",
	},
};

export default function AboutPageEs() {
	// Markup lives in <PopupShell />, rendered from the root layout.
	return null;
}
