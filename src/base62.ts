import { decodeNumber } from "./decode-number";
import { encodeNumber } from "./encode-number";

/** Base-62 alphabet */
export const BASE62_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Encodes a number to base-62 string.
 *
 * @param {number} num - The number to encode
 * @returns {string} The base-62 encoded string
 */
export const encodeBase62 = (num: number): string => encodeNumber(num, BASE62_ALPHABET);

/**
 * Decodes a base-62 string to a number.
 *
 * @param {string} str - The base-62 string to decode
 * @returns {number} The decoded number
 */
export const decodeBase62 = (str: string): number => decodeNumber(str, BASE62_ALPHABET);
