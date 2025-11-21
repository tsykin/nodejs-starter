import { MONTH_NAMES } from '@/shared/constants';

/**
 * Pads a number with a leading zero if it is less than 10.
 */
export function padZero(value: number): string {
	return (value < 10 ? '0' : '') + value;
}

/**
 * Format a Date object or string according to the given output format.
 * Uses local time methods for proper timezone display.
 */
export function formatDate(
	input: Date | string | null | undefined,
	outputFormat:
		| 'YYYY-MM-DD HH:MM'
		| 'YYYY-MM-DD HH:MM:SS'
		| 'YYYY-MM-DD'
		| 'DD Month YYYY'
		| 'YYYY-MM-DD-HH-MM-SS-MS'
		| 'YYYY-MM-DD-HH-MM-SS'
		| 'YYYY-MM-DD-HH-MM'
		| 'HH:MM'
		| 'HH:MM:SS'
		| 'HH AM/PM'
): string | null {
	if (!input) return null;

	const date = typeof input === 'string' ? new Date(input) : input;

	if (Number.isNaN(date.getTime())) {
		return null;
	}

	const Y = date.getFullYear();
	const M = padZero(date.getMonth() + 1);
	const D = padZero(date.getDate());
	const h = padZero(date.getHours());
	const m = padZero(date.getMinutes());
	const s = padZero(date.getSeconds());
	const ms = padZero(Math.floor(date.getMilliseconds() / 10));

	// For 12-hour format with AM/PM
	const hours24 = date.getHours();
	const hours12 = hours24 % 12 || 12; // Convert 0 to 12
	const ampm = hours24 >= 12 ? 'PM' : 'AM';

	switch (outputFormat) {
		case 'YYYY-MM-DD HH:MM':
			return `${Y}-${M}-${D} ${h}:${m}`;
		case 'YYYY-MM-DD HH:MM:SS':
			return `${Y}-${M}-${D} ${h}:${m}:${s}`;
		case 'DD Month YYYY':
			return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${Y}`;
		case 'YYYY-MM-DD-HH-MM-SS-MS':
			return `${Y}-${M}-${D}-${h}-${m}-${s}-${ms}`;
		case 'YYYY-MM-DD-HH-MM-SS':
			return `${Y}-${M}-${D}-${h}-${m}-${s}`;
		case 'YYYY-MM-DD-HH-MM':
			return `${Y}-${M}-${D}-${h}-${m}`;
		case 'HH:MM':
			return `${h}:${m}`;
		case 'HH:MM:SS':
			return `${h}:${m}:${s}`;
		case 'HH AM/PM':
			return `${hours12} ${ampm}`;
		default:
			return `${Y}-${M}-${D}`;
	}
}

/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 */
export function generateRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * Returns a new shuffled array without modifying the original.
 */
export function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

/**
 * Converts a Unix timestamp (in seconds) to ISO format.
 */
export function convertUnixTimestampToISO(timestamp: number): string {
	// Convert the timestamp to a Date object
	const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

	// Convert the Date object to ISO format
	return date.toISOString();
}
