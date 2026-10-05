import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Base-62 alphabet */
export const BASE62_ALPHABET: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Encodes a number to base-62 string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The base-62 encoded string.
 */
export const encodeBase62 = (num: number): string => encodeNumber(num, BASE62_ALPHABET);

/**
 * Decodes a base-62 string to a number.
 *
 * @param {string} str - The base-62 string to decode.
 * @returns {number} The decoded number.
 */
export const decodeBase62 = (str: string): number => decodeNumber(str, BASE62_ALPHABET);

/**
 * Encodes a BigInt to base-62 string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The base-62 encoded string.
 */
export const encodeBigBase62 = (num: bigint): string => encodeBigInt(num, BASE62_ALPHABET);

/**
 * Decodes a base-62 string to a BigInt.
 *
 * @param {string} str - The base-62 string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigBase62 = (str: string): bigint => decodeBigInt(str, BASE62_ALPHABET);
