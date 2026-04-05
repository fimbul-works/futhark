import { charAt } from "./char-at";

/**
 * Decodes a number from a specified alphabet string.
 *
 * @param {string} str - The base-62 string to decode
 * @param {string} alphabet - The alphabet to use for decoding
 * @returns {number} The decoded number
 */
export const decodeNumber = (str: string, alphabet: string): number => {
  let result = 0,
    len = alphabet.length;

  for (let i = 0; i < str.length; i++) {
    const digit = alphabet.indexOf(charAt(str, i));
    if (digit === -1) throw new Error(`Invalid character: ${charAt(str, i)}`);
    result = result * len + digit;
  }

  return result;
};
