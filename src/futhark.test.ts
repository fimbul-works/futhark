import { describe, expect, it } from "vitest";
import { decodeFuthark, encodeFuthark } from "./futhark";

describe("encodeFuthark", () => {
  it("should encode 0 correctly", () => {
    expect(encodeFuthark(0)).toBe("ᚠ");
  });

  it("should encode small numbers correctly", () => {
    expect(encodeFuthark(1)).toBe("ᚢ");
    expect(encodeFuthark(10)).toBe("ᛁ");
    expect(encodeFuthark(23)).toBe("ᛟ");
  });

  it("should encode multi-digit numbers correctly", () => {
    expect(encodeFuthark(24)).toBe("ᚢᚠ");
    expect(encodeFuthark(25)).toBe("ᚢᚢ");
    expect(encodeFuthark(999)).toBe("ᚢᛒᛊ");
  });

  it("should encode large 32-bit integers correctly", () => {
    expect(encodeFuthark(0xffffffff)).toBe("ᛞᛃᚾᚾᚱᛁᛊ");
  });
});

describe("decodeFuthark", () => {
  it("should decode single digits correctly", () => {
    expect(decodeFuthark("ᚠ")).toBe(0);
    expect(decodeFuthark("ᛁ")).toBe(10);
    expect(decodeFuthark("ᛟ")).toBe(23);
  });

  it("should decode multi-digit strings correctly", () => {
    expect(decodeFuthark("ᚢᚠ")).toBe(24);
    expect(decodeFuthark("ᚢᚠᚠ")).toBe(576);
    expect(decodeFuthark("ᚢᚠᚢ")).toBe(577);
    expect(decodeFuthark("ᚢᛒᛊ")).toBe(999);
  });

  it("should decode large strings correctly", () => {
    expect(decodeFuthark("ᛞᛃᚾᚾᚱᛁᛊ")).toBe(0xffffffff);
  });

  it("should throw Error for invalid characters", () => {
    expect(() => decodeFuthark("ᛒᚨ#")).toThrow(Error);
    expect(() => decodeFuthark("ᛒᚨ#")).toThrow("Invalid character: #");
  });
});
