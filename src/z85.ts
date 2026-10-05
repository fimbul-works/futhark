import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Z85 (ZeroMQ Base-85) alphabet */
export const Z85_ALPHABET: string =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#";

/**
 * Encodes a number to a Z85 string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Z85 encoded string.
 */
export const encodeZ85 = (num: number): string => encodeNumber(num, Z85_ALPHABET);

/**
 * Decodes a Z85 string to a number.
 *
 * @param {string} str - The Z85 string to decode.
 * @returns {number} The decoded number.
 */
export const decodeZ85 = (str: string): number => decodeNumber(str, Z85_ALPHABET);

/**
 * Encodes a BigInt to a Z85 string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Z85 encoded string.
 */
export const encodeBigZ85 = (num: bigint): string => encodeBigInt(num, Z85_ALPHABET);

/**
 * Decodes a Z85 string to a BigInt.
 *
 * @param {string} str - The Z85 string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigZ85 = (str: string): bigint => decodeBigInt(str, Z85_ALPHABET);
