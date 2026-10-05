import { describe, expect, it } from "vitest";
import { BASE62_ALPHABET } from "./base62.js";
import { decodeBigInt } from "./decode-bigint.js";
import { encodeBigInt } from "./encode-bigint.js";

describe("decodeBigInt", () => {
  it("should decode single digits correctly", () => {
    expect(decodeBigInt("0", BASE62_ALPHABET)).toBe(0n);
    expect(decodeBigInt("a", BASE62_ALPHABET)).toBe(10n);
    expect(decodeBigInt("Z", BASE62_ALPHABET)).toBe(61n);
  });

  it("should decode multi-digit strings correctly", () => {
    expect(decodeBigInt("10", BASE62_ALPHABET)).toBe(62n);
    expect(decodeBigInt("ZZ", BASE62_ALPHABET)).toBe(3843n);
    expect(decodeBigInt("100", BASE62_ALPHABET)).toBe(3844n);
    expect(decodeBigInt("8m0Kx", BASE62_ALPHABET)).toBe(123456789n);
  });

  it("should decode large strings beyond MAX_SAFE_INTEGER correctly", () => {
    const huge = 123456789012345678901234567890n;
    expect(decodeBigInt("4GFfc3", BASE62_ALPHABET)).toBe(BigInt(0xffffffff));
    expect(decodeBigInt("lYGhA16ahyf", BASE62_ALPHABET)).toBe(18446744073709551615n);
    expect(decodeBigInt(encodeBigInt(huge, BASE62_ALPHABET), BASE62_ALPHABET)).toBe(huge);
  });

  it("should throw Error for invalid characters", () => {
    expect(() => decodeBigInt("abc#123", BASE62_ALPHABET)).toThrow(Error);
    expect(() => decodeBigInt("abc#123", BASE62_ALPHABET)).toThrow("Invalid character: #");
  });

  it("should support custom alphabets", () => {
    const DNA_ALPHABET = "ACGT";

    expect(decodeBigInt("A", DNA_ALPHABET)).toBe(0n);
    expect(decodeBigInt("TTTT", DNA_ALPHABET)).toBe(255n);
  });
});
