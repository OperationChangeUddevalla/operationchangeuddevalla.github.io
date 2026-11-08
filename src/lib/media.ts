import type { ImageMetadata } from "astro";

export interface FolderMeta {
	files?: Record<string, { alt?: string; label?: string }>;
}

const imageAssets = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/**/*.{avif,png,webp,jpeg,jpg,svg}",
);
const videoAssets = import.meta.glob<{ default: string }>(
	"/src/assets/**/*.{mp4,webm,mov}",
);
const metaFiles = import.meta.glob("/src/assets/**/media.json", {
	eager: true,
	import: "default",
});

export function normalizeDir(path: string): string {
	return path.endsWith("/") ? path : path + "/";
}

const asc = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0);
export const desc = (a: string, b: string): number => -asc(a, b);

export interface Media {
	images: Record<string, () => Promise<{ default: ImageMetadata }>>;
	videos: Record<string, () => Promise<{ default: string }>>;
	meta: FolderMeta;
}

export function getMedia(path: string): Media {
	const dir = normalizeDir(path);
	const images = Object.fromEntries(
		Object.entries(imageAssets)
			.filter(([key]) => key.startsWith(dir))
			.sort(([a], [b]) => asc(a, b)),
	);
	const videos = Object.fromEntries(
		Object.entries(videoAssets)
			.filter(([key]) => key.startsWith(dir))
			.sort(([a], [b]) => asc(a, b)),
	);
	const meta = (metaFiles[dir + "media.json"] ?? {}) as FolderMeta;
	if (Object.keys(images).length === 0 && Object.keys(videos).length === 0) {
		throw new Error(`${path}`);
	}
	return { images, videos, meta };
}

export function getSubPaths(path: string): string[] {
	const dir = normalizeDir(path);
	const subs = new Set<string>();
	for (const key of [
		...Object.keys(imageAssets),
		...Object.keys(videoAssets),
	]) {
		if (!key.startsWith(dir)) continue;
		const rest = key.slice(dir.length);
		const slash = rest.indexOf("/");
		if (slash > 0) subs.add(dir + rest.slice(0, slash + 1));
	}
	return [...subs];
}

export function getLooseFiles(path: string): string[] {
	const dir = normalizeDir(path);
	return [...Object.keys(imageAssets), ...Object.keys(videoAssets)].filter(
		(key) => key.startsWith(dir) && !key.slice(dir.length).includes("/"),
	);
}
