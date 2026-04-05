import { charAt } from "./char-at";

/**
 * Encodes a number to using a specified alphabet string.
 *
 * @param {number} num - The number to encode
 * @param {string} alphabet - The alphabet to use for encoding
 * @returns {string} The base-62 encoded string
 */
export const encodeNumber = (num: number, alphabet: string): string => {
  if (num < 0) throw new Error("Negative numbers are not supported");

  let result = "",
    n = num,
    len = alphabet.length;

  while (n > 0) {
    result = charAt(alphabet, n % len) + result;
    n = Math.floor(n / len);
  }

  return result || charAt(alphabet, 0);
};
