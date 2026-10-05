const GLYPH_SEGMENTER = new Intl.Segmenter();

/**
 * Splits a string into an array of Unicode grapheme clusters (user-perceived characters).
 *
 * Correctly handles ASCII, BMP characters, surrogate pairs, and multi-codepoint sequences
 * such as emojis with variation selectors or skin tone modifiers.
 *
 * @param {string} str - The string to segment into glyphs.
 * @returns {string[]} An array of grapheme cluster strings.
 */
export const toGlyphs = (str: string): string[] => [...GLYPH_SEGMENTER.segment(str)].map((s) => s.segment);
