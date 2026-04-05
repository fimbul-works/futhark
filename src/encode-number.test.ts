import { describe, expect, it } from "vitest";
import { BASE62_ALPHABET } from "./base62";
import { encodeNumber } from "./encode-number";

describe("encodeNumber", () => {
  it("should encode 0 correctly", () => {
    expect(encodeNumber(0, BASE62_ALPHABET)).toBe("0");
  });

  it("should encode small numbers correctly", () => {
    expect(encodeNumber(1, BASE62_ALPHABET)).toBe("1");
    expect(encodeNumber(10, BASE62_ALPHABET)).toBe("a");
    expect(encodeNumber(61, BASE62_ALPHABET)).toBe("Z");
  });

  it("should encode multi-digit numbers correctly", () => {
    expect(encodeNumber(62, BASE62_ALPHABET)).toBe("10");
    expect(encodeNumber(3843, BASE62_ALPHABET)).toBe("ZZ"); // 61 * 62^1 + 61 * 62^0 = 3782 + 61 = 3843
    expect(encodeNumber(3844, BASE62_ALPHABET)).toBe("100"); // 62^2
    expect(encodeNumber(123456789, BASE62_ALPHABET)).toBe("8m0Kx");
  });

  it("should encode large 32-bit integers correctly", () => {
    // 0xFFFFFFFF = 4294967295
    expect(encodeNumber(0xffffffff, BASE62_ALPHABET)).toBe("4GFfc3");
  });

  it("should throw Error for negative numbers", () => {
    expect(() => encodeNumber(-1, BASE62_ALPHABET)).toThrow(Error);
    expect(() => encodeNumber(-1, BASE62_ALPHABET)).toThrow("Negative numbers are not supported");
  });

  it("should support custom alphabets", () => {
    const DNA_ALPHABET = "ACGT";

    expect(encodeNumber(0, DNA_ALPHABET)).toBe("A");
    expect(encodeNumber(255, DNA_ALPHABET)).toBe("TTTT");
  });
});
