import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Braille 6-dot patterns alphabet */
export const BRAILLE_ALPHABET: string = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿";

/**
 * Encodes a number to a Braille string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Braille encoded string.
 */
export const encodeBraille = (num: number): string => encodeNumber(num, BRAILLE_ALPHABET);

/**
 * Decodes a Braille string to a number.
 *
 * @param {string} str - The Braille string to decode.
 * @returns {number} The decoded number.
 */
export const decodeBraille = (str: string): number => decodeNumber(str, BRAILLE_ALPHABET);

/**
 * Encodes a BigInt to a Braille string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Braille encoded string.
 */
export const encodeBigBraille = (num: bigint): string => encodeBigInt(num, BRAILLE_ALPHABET);

/**
 * Decodes a Braille string to a BigInt.
 *
 * @param {string} str - The Braille string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigBraille = (str: string): bigint => decodeBigInt(str, BRAILLE_ALPHABET);
