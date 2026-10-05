import { describe, expect, it } from "vitest";
import { BASE62_ALPHABET } from "./base62.js";
import { encodeBigInt } from "./encode-bigint.js";

describe("encodeBigInt", () => {
  it("should encode 0n correctly", () => {
    expect(encodeBigInt(0n, BASE62_ALPHABET)).toBe("0");
  });

  it("should encode small BigInt numbers correctly", () => {
    expect(encodeBigInt(1n, BASE62_ALPHABET)).toBe("1");
    expect(encodeBigInt(10n, BASE62_ALPHABET)).toBe("a");
    expect(encodeBigInt(61n, BASE62_ALPHABET)).toBe("Z");
  });

  it("should encode multi-digit BigInt numbers correctly", () => {
    expect(encodeBigInt(62n, BASE62_ALPHABET)).toBe("10");
    expect(encodeBigInt(3843n, BASE62_ALPHABET)).toBe("ZZ");
    expect(encodeBigInt(3844n, BASE62_ALPHABET)).toBe("100");
    expect(encodeBigInt(123456789n, BASE62_ALPHABET)).toBe("8m0Kx");
  });

  it("should encode large 64-bit and 128-bit BigInt values beyond MAX_SAFE_INTEGER", () => {
    expect(encodeBigInt(0xffffffffffffffffn, BASE62_ALPHABET)).toBe("lYGhA16ahyf");
    expect(encodeBigInt(18446744073709551615n, BASE62_ALPHABET)).toBe("lYGhA16ahyf");
  });

  it("should throw Error for negative BigInt numbers", () => {
    expect(() => encodeBigInt(-1n, BASE62_ALPHABET)).toThrow(Error);
    expect(() => encodeBigInt(-1n, BASE62_ALPHABET)).toThrow("Negative numbers are not supported");
  });

  it("should support custom alphabets", () => {
    const DNA_ALPHABET = "ACGT";

    expect(encodeBigInt(0n, DNA_ALPHABET)).toBe("A");
    expect(encodeBigInt(255n, DNA_ALPHABET)).toBe("TTTT");
  });
});
