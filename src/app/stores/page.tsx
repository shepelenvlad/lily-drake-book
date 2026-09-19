import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Find in Stores | Lily Drake",
	description:
		"Find The Age of Dragons: Awake, My Hero in stores near you, with an interactive map of stockists.",
	alternates: {
		canonical: "/stores",
	},
};

export default function StoresPage() {
	// Markup lives in <PopupShell />, rendered from the root layout.
	return null;
}
