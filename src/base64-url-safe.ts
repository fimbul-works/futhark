import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** URL-safe base-64 alphabet */
export const URL_SAFE_BASE64_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

/**
 * Encodes a number to an URL-safe base-64 string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The URL-safe base-64 encoded string.
 */
export const encodeURLSafeBase64 = (num: number): string => encodeNumber(num, URL_SAFE_BASE64_ALPHABET);

/**
 * Decodes a URL-safe base-64 string to a number.
 *
 * @param {string} str - The URL-safe base-64 string to decode.
 * @returns {number} The decoded number.
 */
export const decodeURLSafeBase64 = (str: string): number => decodeNumber(str, URL_SAFE_BASE64_ALPHABET);

/**
 * Encodes a BigInt to an URL-safe base-64 string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The URL-safe base-64 encoded string.
 */
export const encodeBigURLSafeBase64 = (num: bigint): string => encodeBigInt(num, URL_SAFE_BASE64_ALPHABET);

/**
 * Decodes a URL-safe base-64 string to a BigInt.
 *
 * @param {string} str - The URL-safe base-64 string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigURLSafeBase64 = (str: string): bigint => decodeBigInt(str, URL_SAFE_BASE64_ALPHABET);
