import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Zodiac alphabet (canonical order) */
export const ZODIAC_ALPHABET: string = "♈♉♊♋♌♍♎♏♐♑♒♓";

/**
 * Encodes a number to a Zodiac string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Zodiac encoded string.
 */
export const encodeZodiac = (num: number): string => encodeNumber(num, ZODIAC_ALPHABET);

/**
 * Decodes a Zodiac string to a number.
 *
 * @param {string} str - The Zodiac string to decode.
 * @returns {number} The decoded number.
 */
export const decodeZodiac = (str: string): number => decodeNumber(str, ZODIAC_ALPHABET);

/**
 * Encodes a BigInt to a Zodiac string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Zodiac encoded string.
 */
export const encodeBigZodiac = (num: bigint): string => encodeBigInt(num, ZODIAC_ALPHABET);

/**
 * Decodes a Zodiac string to a BigInt.
 *
 * @param {string} str - The Zodiac string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigZodiac = (str: string): bigint => decodeBigInt(str, ZODIAC_ALPHABET);
