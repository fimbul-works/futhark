import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Base-58 alphabet (Bitcoin/IPFS standard, excluding 0, O, I, l) */
export const BASE58_ALPHABET: string = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

/**
 * Encodes a number to a base-58 string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The base-58 encoded string.
 */
export const encodeBase58 = (num: number): string => encodeNumber(num, BASE58_ALPHABET);

/**
 * Decodes a base-58 string to a number.
 *
 * @param {string} str - The base-58 string to decode.
 * @returns {number} The decoded number.
 */
export const decodeBase58 = (str: string): number => decodeNumber(str, BASE58_ALPHABET);

/**
 * Encodes a BigInt to a base-58 string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The base-58 encoded string.
 */
export const encodeBigBase58 = (num: bigint): string => encodeBigInt(num, BASE58_ALPHABET);

/**
 * Decodes a base-58 string to a BigInt.
 *
 * @param {string} str - The base-58 string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigBase58 = (str: string): bigint => decodeBigInt(str, BASE58_ALPHABET);
