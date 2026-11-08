import {
	descending,
	getLooseFiles,
	getSubPaths,
	normalizeDirectory,
} from "./media";

export interface Trip {
	title: string;
	path: string;
}

export const trips: Trip[] = [
	{ title: "Oct 2026 - nu", path: "/src/assets/trips/2026-10_now/" },
	{ title: "Sep 2026 - Oct 2026", path: "/src/assets/trips/2026-09_2026-10/" },
	{ title: "Jul 2026 - Aug 2026", path: "/src/assets/trips/2026-07_2026-08/" },
	{ title: "Maj 2026 - Jun 2026", path: "/src/assets/trips/2026-05_2026-07/" },
	{ title: "Apr 2026 - Maj 2026", path: "/src/assets/trips/2026-04_2026-05/" },
	{ title: "Jan 2026 - Mar 2026", path: "/src/assets/trips/2026-01_2026-03/" },
	{ title: "Nov 2025 - Dec 2025", path: "/src/assets/trips/2025-11_2025-12/" },
	{ title: "Okt 2025 - Nov 2025", path: "/src/assets/trips/2025-10_2025-11/" },
	{ title: "Sep 2025 - Sep 2025", path: "/src/assets/trips/2025-09_2025-09/" },
	{ title: "Apr 2025 - Aug 2025", path: "/src/assets/trips/2025-04_2025-08/" },
	{ title: "Nov 2024 - Jan 2025", path: "/src/assets/trips/2024-11_2025-01/" },
	{ title: "Jun 2024 - Okt 2024", path: "/src/assets/trips/2024-06_2024-10/" },
	{ title: "Renoveringsprojektet", path: "/src/assets/trips/renovate/" },
	{ title: "Nov 2023 - Jan 2024", path: "/src/assets/trips/2023-11_2024-01/" },
	{ title: "Aug 2023 - Oct 2023", path: "/src/assets/trips/2023-08_2023-10/" },
];

export function getDays(tripPath: string): string[] {
	const directory = normalizeDirectory(tripPath);
	const subdirectories = getSubPaths(directory);
	if (subdirectories.length === 0) {
		return [directory];
	}
	const looseFiles = getLooseFiles(directory);
	if (looseFiles.length > 0) {
		throw new Error(
			`Loose media at trip root ${directory}: ${looseFiles.join(", ")} — move into a day folder`,
		);
	}
	return subdirectories.sort(descending);
}
