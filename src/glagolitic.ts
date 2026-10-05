import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Glagolitic alphabet (canonical order) */
export const GLAGOLITIC_ALPHABET: string = "ⰀⰁⰂⰃⰄⰅⰆⰇⰈⰊⰋⰌⰍⰎⰏⰐⰑⰒⰓⰔⰕⰖⰗⰘⰙⰚⰛⰜⰝⰞⰟⰠⰡⰢⰣⰤⰥⰦⰧⰨ";

/**
 * Encodes a number to a Glagolitic string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Glagolitic encoded string.
 */
export const encodeGlagolitic = (num: number): string => encodeNumber(num, GLAGOLITIC_ALPHABET);

/**
 * Decodes a Glagolitic string to a number.
 *
 * @param {string} str - The Glagolitic string to decode.
 * @returns {number} The decoded number.
 */
export const decodeGlagolitic = (str: string): number => decodeNumber(str, GLAGOLITIC_ALPHABET);

/**
 * Encodes a BigInt to a Glagolitic string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Glagolitic encoded string.
 */
export const encodeBigGlagolitic = (num: bigint): string => encodeBigInt(num, GLAGOLITIC_ALPHABET);

/**
 * Decodes a Glagolitic string to a BigInt.
 *
 * @param {string} str - The Glagolitic string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigGlagolitic = (str: string): bigint => decodeBigInt(str, GLAGOLITIC_ALPHABET);
