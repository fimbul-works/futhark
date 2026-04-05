import { describe, expect, it } from "vitest";
import { encodeNumber } from "./encode-number";
import { BASE62_ALPHABET } from "./base62";
import { decodeNumber } from "./decode-number";
import { FUTHARK_ALPHABET } from "./futhark";

describe("round-trip", () => {
  it("should satisfy round-trip property for various numbers in base-62", () => {
    const numbers = [0, 1, 61, 62, 123, 3843, 3844, 1000000, 0x7fffffff, 0xffffffff];
    for (const n of numbers) {
      expect(decodeNumber(encodeNumber(n, BASE62_ALPHABET), BASE62_ALPHABET)).toBe(n);
    }
  });

  it("should satisfy round-trip property for various numbers in Futhark", () => {
    const numbers = [0, 1, 23, 24, 123, 3843, 3844, 1000000, 0x7fffffff, 0xffffffff];
    for (const n of numbers) {
      expect(decodeNumber(encodeNumber(n, FUTHARK_ALPHABET), FUTHARK_ALPHABET)).toBe(n);
    }
  });
});
