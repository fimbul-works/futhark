import { decodeNumber } from "./decode-number";
import { encodeNumber } from "./encode-number";

/** Futhark alphabet (canonical order) */
export const FUTHARK_ALPHABET = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";

/**
 * Encodes a number to a runic string.
 *
 * @param {number} num - The number to encode
 * @returns {string} The runic encoded string
 */
export const encodeFuthark = (num: number): string => encodeNumber(num, FUTHARK_ALPHABET);

/**
 * Decodes a runic string to a number.
 *
 * @param {string} str - The base-62 string to decode
 * @returns {number} The decoded number
 */
export const decodeFuthark = (str: string): number => decodeNumber(str, FUTHARK_ALPHABET);
