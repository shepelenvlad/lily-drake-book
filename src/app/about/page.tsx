import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About the Author | Lily Drake",
	description:
		"Learn about Lily Drake, author of the dark fantasy saga The Age of Dragons: Awake, My Hero.",
	alternates: {
		canonical: "/about",
	},
};

export default function AboutPage() {
	// Markup lives in <PopupShell />, rendered from the root layout.
	return null;
}
