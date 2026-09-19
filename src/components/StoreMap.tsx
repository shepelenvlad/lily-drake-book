"use client";

import { useEffect, useRef, useState } from "react";

export type Store = {
	name: string;
	address: string;
	lat: number;
	lng: number;
	mapsUrl: string;
};

// The three "Find in Stores" locations. Coordinates and canonical
// Google Maps place links were resolved from the short links supplied
// for this feature.
export const STORES: Store[] = [
	{
		name: "Libreria Frances",
		address: "Alicante, Spain",
		lat: 38.5377518,
		lng: -0.1294273,
		mapsUrl:
			"https://maps.app.goo.gl/oJjUGh7i4Dairz1E8",
	},
	{
		name: "Librería Ulises",
		address: "Alicante, Spain",
		lat: 38.5390141,
		lng: -0.1312397,
		mapsUrl:
			"https://maps.app.goo.gl/bEQMa7ayBxqgKgaq5",
	},
	{
		name: "Celaeno Comics",
		address: "Alicante, Spain",
		lat: 38.5428337,
		lng: -0.1309281,
		mapsUrl:
			"https://maps.app.goo.gl/9tdZC7LQ6UfRw5C18",
	},
];

// Minimal shape of the bits of the Maps JS API this component touches.
// Kept local (rather than depending on @types/google.maps) so the project
// doesn't need an extra dependency just for this one component.
interface MinimalGoogleMaps {
	maps: {
		LatLngBounds: new () => {
			extend: (point: { lat: number; lng: number }) => void;
			getCenter: () => unknown;
		};
		Map: new (
			el: HTMLElement,
			opts: { center: unknown; zoom: number; mapId?: string }
		) => {
			fitBounds: (bounds: unknown, padding?: number) => void;
		};
		Marker: new (opts: {
			position: { lat: number; lng: number };
			map: unknown;
			title?: string;
		}) => {
			addListener: (event: string, handler: () => void) => void;
		};
		InfoWindow: new () => {
			setContent: (html: string) => void;
			open: (map: unknown, marker: unknown) => void;
		};
	};
}

declare global {
	interface Window {
		google?: MinimalGoogleMaps;
		__initStoreMap?: () => void;
	}
}

let loaderPromise: Promise<void> | null = null;

// Loads the Maps JS API exactly once, however many <StoreMap> instances
// end up mounted (only one in this app, but this keeps it safe).
function loadGoogleMaps(apiKey: string): Promise<void> {
	if (window.google?.maps) return Promise.resolve();
	if (loaderPromise) return loaderPromise;

	loaderPromise = new Promise((resolve, reject) => {
		window.__initStoreMap = () => resolve();
		const script = document.createElement("script");
		script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=__initStoreMap`;
		script.async = true;
		script.onerror = () => reject(new Error("Failed to load Google Maps"));
		document.head.appendChild(script);
	});

	return loaderPromise;
}

export default function StoreMap({ locale }: { locale: "en" | "es" }) {
	const mapRef = useRef<HTMLDivElement>(null);
	const [status, setStatus] = useState<"loading" | "ready" | "error" | "no-key">("loading");

	useEffect(() => {
		const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

		if (!apiKey) {
			setStatus("no-key");
			return;
		}

		let cancelled = false;

		loadGoogleMaps(apiKey)
			.then(() => {
				if (cancelled || !mapRef.current || !window.google) return;

				const bounds = new window.google.maps.LatLngBounds();
				STORES.forEach((store) => bounds.extend({ lat: store.lat, lng: store.lng }));

				const map = new window.google.maps.Map(mapRef.current, {
					center: bounds.getCenter(),
					zoom: 13,
					mapId: "LILY_DRAKE_STORE_MAP",
				});
				map.fitBounds(bounds, 60);

				const infoWindow = new window.google.maps.InfoWindow();

				STORES.forEach((store) => {
					const marker = new window.google!.maps.Marker({
						position: { lat: store.lat, lng: store.lng },
						map,
						title: store.name,
					});

					marker.addListener("click", () => {
						infoWindow.setContent(
							`<div style="color:#111; font-size: 0.85rem; line-height: 1.4;">
								<strong>${store.name}</strong><br />
								${store.address}<br />
								<a href="${store.mapsUrl}" target="_blank" rel="noopener noreferrer">
									${locale === "es" ? "Ver en Google Maps" : "View on Google Maps"}
								</a>
							</div>`
						);
						infoWindow.open(map, marker);
					});
				});

				setStatus("ready");
			})
			.catch(() => {
				if (!cancelled) setStatus("error");
			});

		return () => {
			cancelled = true;
		};
	}, [locale]);

	return (
		<div className="store-map">
			<div
				ref={mapRef}
				style={{
					width: "100%",
					height: "100%",
					display: status === "ready" ? "block" : "none",
				}}
			/>
			{status !== "ready" && (
				<div className="store-map-fallback">
					{status === "no-key" &&
						(locale === "es"
							? "Añade tu clave de la API de Google Maps (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) para mostrar el mapa interactivo. Mientras tanto, consulta las tiendas más abajo."
							: "Add your Google Maps API key (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) to show the interactive map. In the meantime, see the stores listed below.")}
					{status === "error" &&
						(locale === "es"
							? "No se pudo cargar Google Maps. Consulta las tiendas más abajo."
							: "Couldn't load Google Maps. See the stores listed below.")}
					{status === "loading" && (locale === "es" ? "Cargando el mapa…" : "Loading map…")}
				</div>
			)}
		</div>
	);
}
