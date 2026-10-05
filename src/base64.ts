import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Base-64 alphabet */
export const BASE64_ALPHABET: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

/**
 * Encodes a number to base-64 string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The base-64 encoded string.
 */
export const encodeBase64 = (num: number): string => encodeNumber(num, BASE64_ALPHABET);

/**
 * Decodes a base-64 string to a number.
 *
 * @param {string} str - The base-64 string to decode.
 * @returns {number} The decoded number.
 */
export const decodeBase64 = (str: string): number => decodeNumber(str, BASE64_ALPHABET);

/**
 * Encodes a BigInt to base-64 string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The base-64 encoded string.
 */
export const encodeBigBase64 = (num: bigint): string => encodeBigInt(num, BASE64_ALPHABET);

/**
 * Decodes a base-64 string to a BigInt.
 *
 * @param {string} str - The base-64 string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigBase64 = (str: string): bigint => decodeBigInt(str, BASE64_ALPHABET);
