import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Crockford's Base-32 alphabet (excluding I, L, O, U) */
export const CROCKFORD_BASE32_ALPHABET: string = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

/**
 * Encodes a number to a Crockford's Base-32 string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Crockford's Base-32 encoded string.
 */
export const encodeCrockfordBase32 = (num: number): string => encodeNumber(num, CROCKFORD_BASE32_ALPHABET);

/**
 * Decodes a Crockford's Base-32 string to a number.
 *
 * @param {string} str - The Crockford's Base-32 string to decode.
 * @returns {number} The decoded number.
 */
export const decodeCrockfordBase32 = (str: string): number => decodeNumber(str, CROCKFORD_BASE32_ALPHABET);

/**
 * Encodes a BigInt to a Crockford's Base-32 string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Crockford's Base-32 encoded string.
 */
export const encodeBigCrockfordBase32 = (num: bigint): string => encodeBigInt(num, CROCKFORD_BASE32_ALPHABET);

/**
 * Decodes a Crockford's Base-32 string to a BigInt.
 *
 * @param {string} str - The Crockford's Base-32 string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigCrockfordBase32 = (str: string): bigint => decodeBigInt(str, CROCKFORD_BASE32_ALPHABET);
