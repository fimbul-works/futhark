import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** I Ching Hexagrams alphabet */
export const HEXAGRAM_ALPHABET: string =
  "䷀䷁䷂䷃䷄䷅䷆䷇䷈䷉䷊䷋䷌䷍䷎䷏䷐䷑䷒䷓䷔䷕䷖䷗䷘䷙䷚䷛䷜䷝䷞䷟䷠䷡䷢䷣䷤䷥䷦䷧䷨䷩䷪䷫䷬䷭䷮䷯䷰䷱䷲䷳䷴䷵䷶䷷䷸䷹䷺䷻䷼䷽䷾䷿";

/**
 * Encodes a number to an I Ching Hexagram string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Hexagram encoded string.
 */
export const encodeHexagram = (num: number): string => encodeNumber(num, HEXAGRAM_ALPHABET);

/**
 * Decodes an I Ching Hexagram string to a number.
 *
 * @param {string} str - The Hexagram string to decode.
 * @returns {number} The decoded number.
 */
export const decodeHexagram = (str: string): number => decodeNumber(str, HEXAGRAM_ALPHABET);

/**
 * Encodes a BigInt to an I Ching Hexagram string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Hexagram encoded string.
 */
export const encodeBigHexagram = (num: bigint): string => encodeBigInt(num, HEXAGRAM_ALPHABET);

/**
 * Decodes an I Ching Hexagram string to a BigInt.
 *
 * @param {string} str - The Hexagram string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigHexagram = (str: string): bigint => decodeBigInt(str, HEXAGRAM_ALPHABET);
