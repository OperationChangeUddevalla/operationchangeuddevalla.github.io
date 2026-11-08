import type { ImageMetadata } from "astro";

export interface FolderMetadata {
	files?: Record<string, { alt?: string; label?: string }>;
}

const imageAssets = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/**/*.{avif,png,webp,jpeg,jpg,svg}",
);
const videoAssets = import.meta.glob<{ default: string }>(
	"/src/assets/**/*.{mp4,webm,mov}",
);
const metadataFiles = import.meta.glob("/src/assets/**/media.json", {
	eager: true,
	import: "default",
});

const allMediaKeys = [...Object.keys(imageAssets), ...Object.keys(videoAssets)];

export function normalizeDirectory(path: string): string {
	return path.endsWith("/") ? path : path + "/";
}

const ascending = (a: string, b: string): number =>
	a < b ? -1 : a > b ? 1 : 0;
export const descending = (a: string, b: string): number => -ascending(a, b);

export interface Media {
	images: Record<string, () => Promise<{ default: ImageMetadata }>>;
	videos: Record<string, () => Promise<{ default: string }>>;
	metadata: FolderMetadata;
}

export function getMedia(path: string): Media {
	const directory = normalizeDirectory(path);
	const images = Object.fromEntries(
		Object.entries(imageAssets)
			.filter(([key]) => key.startsWith(directory))
			.sort(([a], [b]) => ascending(a, b)),
	);
	const videos = Object.fromEntries(
		Object.entries(videoAssets)
			.filter(([key]) => key.startsWith(directory))
			.sort(([a], [b]) => ascending(a, b)),
	);
	const metadata = (metadataFiles[directory + "media.json"] ??
		{}) as FolderMetadata;
	if (Object.keys(images).length === 0 && Object.keys(videos).length === 0) {
		throw new Error(`No media found for path: ${path}`);
	}
	return { images, videos, metadata };
}

export function getSubPaths(path: string): string[] {
	const directory = normalizeDirectory(path);
	const subdirectories = new Set<string>();
	for (const key of allMediaKeys) {
		if (!key.startsWith(directory)) continue;
		const rest = key.slice(directory.length);
		const slash = rest.indexOf("/");
		if (slash > 0) subdirectories.add(directory + rest.slice(0, slash + 1));
	}
	return [...subdirectories];
}

export function getLooseFiles(path: string): string[] {
	const directory = normalizeDirectory(path);
	return allMediaKeys.filter(
		(key) =>
			key.startsWith(directory) && !key.slice(directory.length).includes("/"),
	);
}
