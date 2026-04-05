import { describe, expect, it } from "vitest";
import { BASE62_ALPHABET } from "./base62";
import { decodeNumber } from "./decode-number";

describe("decodeNumber", () => {
  it("should decode single digits correctly", () => {
    expect(decodeNumber("0", BASE62_ALPHABET)).toBe(0);
    expect(decodeNumber("a", BASE62_ALPHABET)).toBe(10);
    expect(decodeNumber("Z", BASE62_ALPHABET)).toBe(61);
  });

  it("should decode multi-digit strings correctly", () => {
    expect(decodeNumber("10", BASE62_ALPHABET)).toBe(62);
    expect(decodeNumber("ZZ", BASE62_ALPHABET)).toBe(3843);
    expect(decodeNumber("100", BASE62_ALPHABET)).toBe(3844);
    expect(decodeNumber("8m0Kx", BASE62_ALPHABET)).toBe(123456789);
  });

  it("should decode large strings correctly", () => {
    expect(decodeNumber("4GFfc3", BASE62_ALPHABET)).toBe(0xffffffff);
  });

  it("should throw Error for invalid characters", () => {
    expect(() => decodeNumber("abc#123", BASE62_ALPHABET)).toThrow(Error);
    expect(() => decodeNumber("abc#123", BASE62_ALPHABET)).toThrow("Invalid character: #");
  });

  it("should support custom alphabets", () => {
    const DNA_ALPHABET = "ACGT";

    expect(decodeNumber("A", DNA_ALPHABET)).toBe(0);
    expect(decodeNumber("TTTT", DNA_ALPHABET)).toBe(255);
  });
});
