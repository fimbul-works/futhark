import { toGlyphs } from "./glyphs.js";

/**
 * Encodes a BigInt using a specified alphabet string.
 *
 * @param {bigint} num - The BigInt to encode.
 * @param {string} alphabet - The alphabet to use for encoding.
 * @returns {string} The alphabet encoded string.
 */
export const encodeBigInt = (num: bigint, alphabet: string): string => {
  if (num < 0n) throw new Error("Negative numbers are not supported");

  const glyphs = toGlyphs(alphabet),
    len = BigInt(glyphs.length);

  let result = "",
    n = num;
  while (n > 0n) {
    result = glyphs[Number(n % len)] + result;
    n /= len;
  }

  return result || glyphs[0];
};
