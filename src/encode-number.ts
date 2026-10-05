import { toGlyphs } from "./glyphs.js";

/**
 * Encodes a number using a specified alphabet string.
 *
 * @param {number} num - The number to encode.
 * @param {string} alphabet - The alphabet to use for encoding.
 * @returns {string} The alphabet encoded string.
 */
export const encodeNumber = (num: number, alphabet: string): string => {
  if (num < 0) throw new Error("Negative numbers are not supported");

  const glyphs = toGlyphs(alphabet),
    len = glyphs.length;

  let result = "",
    n = num;
  while (n > 0) {
    result = glyphs[n % len] + result;
    n = Math.floor(n / len);
  }

  return result || glyphs[0];
};
