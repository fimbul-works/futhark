import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Ogham alphabet (canonical order) */
export const OGHAM_ALPHABET: string = "ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᛁ";

/**
 * Encodes a number to an Ogham string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Ogham encoded string.
 */
export const encodeOgham = (num: number): string => encodeNumber(num, OGHAM_ALPHABET);

/**
 * Decodes an Ogham string to a number.
 *
 * @param {string} str - The Ogham string to decode.
 * @returns {number} The decoded number.
 */
export const decodeOgham = (str: string): number => decodeNumber(str, OGHAM_ALPHABET);

/**
 * Encodes a BigInt to an Ogham string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Ogham encoded string.
 */
export const encodeBigOgham = (num: bigint): string => encodeBigInt(num, OGHAM_ALPHABET);

/**
 * Decodes an Ogham string to a BigInt.
 *
 * @param {string} str - The Ogham string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigOgham = (str: string): bigint => decodeBigInt(str, OGHAM_ALPHABET);
