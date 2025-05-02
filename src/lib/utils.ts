import { MONTH_NAMES } from './constants';

/**
 * Pads a number with a leading zero if it is less than 10.
 *
 * @param value - The number to pad.
 * @returns The padded number as a string.
 */

export function padZero(value: number): string {
  return (value < 10 ? '0' : '') + value;
}

/**
 * Format a Date object or string according to the given output format.
 *
 * @param {Date|string} date The date to format. If a string, it will be converted to a Date object.
 * @param {string} outputFormat The format to use.
 *
 * @returns {string} The formatted date string.
 */
export function formatDate(
  input: Date | string,
  outputFormat:
    | 'YYYY-MM-DD HH:MM'
    | 'YYYY-MM-DD'
    | 'DD Month YYYY'
    | 'YYYY-MM-DD-HH-MM-SS-MS'
    | 'YYYY-MM-DD-HH-MM-SS'
): string {
  const date = typeof input === 'string' ? new Date(input) : input;

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const Y = date.getFullYear();
  const M = padZero(date.getMonth() + 1);
  const D = padZero(date.getDate());
  const h = padZero(date.getHours());
  const m = padZero(date.getMinutes());
  const s = padZero(date.getSeconds());
  const ms = padZero(Math.floor(date.getMilliseconds() / 10));

  switch (outputFormat) {
    case 'YYYY-MM-DD HH:MM':
      return `${Y}-${M}-${D} ${h}:${m}`;
    case 'DD Month YYYY':
      return `${D} ${MONTH_NAMES[date.getMonth()]} ${Y}`;
    case 'YYYY-MM-DD-HH-MM-SS-MS':
      return `${Y}-${M}-${D}-${h}-${m}-${s}-${ms}`;
    case 'YYYY-MM-DD-HH-MM-SS':
      return `${Y}-${M}-${D}-${h}-${m}-${s}`;
    case 'YYYY-MM-DD':
    default:
      return `${Y}-${M}-${D}`;
  }
}

/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 */

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Converts a Unix timestamp (in seconds) to ISO format.
 *
 * @param timestamp - The Unix timestamp in seconds.
 * @returns The timestamp in ISO format.
 */
export function convertUnixTimestampToISO(timestamp: number): string {
  // Convert the timestamp to a Date object
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

  // Convert the Date object to ISO format
  return date.toISOString();
}
