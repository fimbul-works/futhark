import { toGlyphs } from "./glyphs.js";

/**
 * Decodes a BigInt from a specified alphabet string.
 *
 * @param {string} str - The alphabet-encoded string to decode.
 * @param {string} alphabet - The alphabet to use for decoding.
 * @returns {bigint} The decoded BigInt.
 */
export const decodeBigInt = (str: string, alphabet: string): bigint => {
  const strGlyphs = toGlyphs(str),
    glyphs = toGlyphs(alphabet),
    len = BigInt(glyphs.length);

  let result = 0n,
    digit: number;

  for (const c of strGlyphs) {
    digit = glyphs.indexOf(c);
    if (digit === -1) throw new Error(`Invalid character: ${c}`);
    result = result * len + BigInt(digit);
  }

  return result;
};
