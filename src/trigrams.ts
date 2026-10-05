import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** I Ching Trigrams alphabet */
export const TRIGRAM_ALPHABET: string = "☰☱☲☳☴☵☶☷";

/**
 * Encodes a number to an I Ching Trigram string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Trigram encoded string.
 */
export const encodeTrigram = (num: number): string => encodeNumber(num, TRIGRAM_ALPHABET);

/**
 * Decodes an I Ching Trigram string to a number.
 *
 * @param {string} str - The Trigram string to decode.
 * @returns {number} The decoded number.
 */
export const decodeTrigram = (str: string): number => decodeNumber(str, TRIGRAM_ALPHABET);

/**
 * Encodes a BigInt to an I Ching Trigram string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Trigram encoded string.
 */
export const encodeBigTrigram = (num: bigint): string => encodeBigInt(num, TRIGRAM_ALPHABET);

/**
 * Decodes an I Ching Trigram string to a BigInt.
 *
 * @param {string} str - The Trigram string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigTrigram = (str: string): bigint => decodeBigInt(str, TRIGRAM_ALPHABET);
