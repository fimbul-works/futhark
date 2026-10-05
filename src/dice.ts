import { decodeBigInt } from "./decode-bigint.js";
import { decodeNumber } from "./decode-number.js";
import { encodeBigInt } from "./encode-bigint.js";
import { encodeNumber } from "./encode-number.js";

/** Dice face alphabet (1-6 pips) */
export const DICE_ALPHABET: string = "⚀⚁⚂⚃⚄⚅";

/**
 * Encodes a number to a Dice string.
 *
 * @param {number} num - The number to encode.
 * @returns {string} The Dice encoded string.
 */
export const encodeDice = (num: number): string => encodeNumber(num, DICE_ALPHABET);

/**
 * Decodes a Dice string to a number.
 *
 * @param {string} str - The Dice string to decode.
 * @returns {number} The decoded number.
 */
export const decodeDice = (str: string): number => decodeNumber(str, DICE_ALPHABET);

/**
 * Encodes a BigInt to a Dice string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @returns {string} The Dice encoded string.
 */
export const encodeBigDice = (num: bigint): string => encodeBigInt(num, DICE_ALPHABET);

/**
 * Decodes a Dice string to a BigInt.
 *
 * @param {string} str - The Dice string to decode.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigDice = (str: string): bigint => decodeBigInt(str, DICE_ALPHABET);
