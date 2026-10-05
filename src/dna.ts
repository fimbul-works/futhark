import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** DNA nucleotide alphabet (Adenine, Cytosine, Guanine, Thymine) */
export const DNA_ALPHABET: string = "ACGT";

/**
 * Encodes a number to a DNA nucleotide sequence string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The DNA encoded string.
 */
export const encodeDNA = (num: number): string => encodeNumber(num, DNA_ALPHABET);

/**
 * Decodes a DNA nucleotide sequence string to a number.
 *
 * @param {string} str - The DNA string to decode.
 * @returns {number} The decoded number.
 */
export const decodeDNA = (str: string): number => decodeNumber(str, DNA_ALPHABET);

/**
 * Encodes a BigInt to a DNA nucleotide sequence string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The DNA encoded string.
 */
export const encodeBigDNA = (num: bigint): string => encodeBigInt(num, DNA_ALPHABET);

/**
 * Decodes a DNA nucleotide sequence string to a BigInt.
 *
 * @param {string} str - The DNA string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigDNA = (str: string): bigint => decodeBigInt(str, DNA_ALPHABET);
