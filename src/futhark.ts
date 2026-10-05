import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Futhark alphabet (canonical order) */
export const FUTHARK_ALPHABET: string = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";

/**
 * Encodes a number to a runic string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The runic encoded string.
 */
export const encodeFuthark = (num: number): string => encodeNumber(num, FUTHARK_ALPHABET);

/**
 * Decodes a runic string to a number.
 *
 * @param {string} str - The base-62 string to decode.
 * @returns {number} The decoded number.
 */
export const decodeFuthark = (str: string): number => decodeNumber(str, FUTHARK_ALPHABET);

/**
 * Encodes a BigInt to a runic string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The runic encoded string.
 */
export const encodeBigFuthark = (num: bigint): string => encodeBigInt(num, FUTHARK_ALPHABET);

/**
 * Decodes a runic string to a BigInt.
 *
 * @param {string} str - The runic string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigFuthark = (str: string): bigint => decodeBigInt(str, FUTHARK_ALPHABET);
