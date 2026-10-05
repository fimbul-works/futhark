import { describe, expect, it } from "vitest";
import {
  BASE58_ALPHABET,
  BASE62_ALPHABET,
  BASE64_ALPHABET,
  BRAILLE_ALPHABET,
  CROCKFORD_BASE32_ALPHABET,
  DICE_ALPHABET,
  DNA_ALPHABET,
  decodeBase58,
  decodeBase62,
  decodeBase64,
  decodeBigBase58,
  decodeBigBase62,
  decodeBigBase64,
  decodeBigBraille,
  decodeBigCrockfordBase32,
  decodeBigDice,
  decodeBigDNA,
  decodeBigFuthark,
  decodeBigGlagolitic,
  decodeBigHexagram,
  decodeBigInt,
  decodeBigOgham,
  decodeBigTrigram,
  decodeBigURLSafeBase64,
  decodeBigZ85,
  decodeBigZodiac,
  decodeBraille,
  decodeCrockfordBase32,
  decodeDice,
  decodeDNA,
  decodeFuthark,
  decodeGlagolitic,
  decodeHexagram,
  decodeNumber,
  decodeOgham,
  decodeTrigram,
  decodeURLSafeBase64,
  decodeZ85,
  decodeZodiac,
  encodeBase58,
  encodeBase62,
  encodeBase64,
  encodeBigBase58,
  encodeBigBase62,
  encodeBigBase64,
  encodeBigBraille,
  encodeBigCrockfordBase32,
  encodeBigDice,
  encodeBigDNA,
  encodeBigFuthark,
  encodeBigGlagolitic,
  encodeBigHexagram,
  encodeBigInt,
  encodeBigOgham,
  encodeBigTrigram,
  encodeBigURLSafeBase64,
  encodeBigZ85,
  encodeBigZodiac,
  encodeBraille,
  encodeCrockfordBase32,
  encodeDice,
  encodeDNA,
  encodeFuthark,
  encodeGlagolitic,
  encodeHexagram,
  encodeNumber,
  encodeOgham,
  encodeTrigram,
  encodeURLSafeBase64,
  encodeZ85,
  encodeZodiac,
  FUTHARK_ALPHABET,
  GLAGOLITIC_ALPHABET,
  HEXAGRAM_ALPHABET,
  OGHAM_ALPHABET,
  TRIGRAM_ALPHABET,
  URL_SAFE_BASE64_ALPHABET,
  Z85_ALPHABET,
  ZODIAC_ALPHABET,
} from "./index.js";

const alphabets = [
  {
    name: "Base58",
    alphabet: BASE58_ALPHABET,
    encode: encodeBase58,
    decode: decodeBase58,
    encodeBig: encodeBigBase58,
    decodeBig: decodeBigBase58,
  },
  {
    name: "Base62",
    alphabet: BASE62_ALPHABET,
    encode: encodeBase62,
    decode: decodeBase62,
    encodeBig: encodeBigBase62,
    decodeBig: decodeBigBase62,
  },
  {
    name: "Base64",
    alphabet: BASE64_ALPHABET,
    encode: encodeBase64,
    decode: decodeBase64,
    encodeBig: encodeBigBase64,
    decodeBig: decodeBigBase64,
  },
  {
    name: "URLSafeBase64",
    alphabet: URL_SAFE_BASE64_ALPHABET,
    encode: encodeURLSafeBase64,
    decode: decodeURLSafeBase64,
    encodeBig: encodeBigURLSafeBase64,
    decodeBig: decodeBigURLSafeBase64,
  },
  {
    name: "Braille",
    alphabet: BRAILLE_ALPHABET,
    encode: encodeBraille,
    decode: decodeBraille,
    encodeBig: encodeBigBraille,
    decodeBig: decodeBigBraille,
  },
  {
    name: "CrockfordBase32",
    alphabet: CROCKFORD_BASE32_ALPHABET,
    encode: encodeCrockfordBase32,
    decode: decodeCrockfordBase32,
    encodeBig: encodeBigCrockfordBase32,
    decodeBig: decodeBigCrockfordBase32,
  },
  {
    name: "Dice",
    alphabet: DICE_ALPHABET,
    encode: encodeDice,
    decode: decodeDice,
    encodeBig: encodeBigDice,
    decodeBig: decodeBigDice,
  },
  {
    name: "DNA",
    alphabet: DNA_ALPHABET,
    encode: encodeDNA,
    decode: decodeDNA,
    encodeBig: encodeBigDNA,
    decodeBig: decodeBigDNA,
  },
  {
    name: "Futhark",
    alphabet: FUTHARK_ALPHABET,
    encode: encodeFuthark,
    decode: decodeFuthark,
    encodeBig: encodeBigFuthark,
    decodeBig: decodeBigFuthark,
  },
  {
    name: "Glagolitic",
    alphabet: GLAGOLITIC_ALPHABET,
    encode: encodeGlagolitic,
    decode: decodeGlagolitic,
    encodeBig: encodeBigGlagolitic,
    decodeBig: decodeBigGlagolitic,
  },
  {
    name: "Hexagram",
    alphabet: HEXAGRAM_ALPHABET,
    encode: encodeHexagram,
    decode: decodeHexagram,
    encodeBig: encodeBigHexagram,
    decodeBig: decodeBigHexagram,
  },
  {
    name: "Ogham",
    alphabet: OGHAM_ALPHABET,
    encode: encodeOgham,
    decode: decodeOgham,
    encodeBig: encodeBigOgham,
    decodeBig: decodeBigOgham,
  },
  {
    name: "Trigram",
    alphabet: TRIGRAM_ALPHABET,
    encode: encodeTrigram,
    decode: decodeTrigram,
    encodeBig: encodeBigTrigram,
    decodeBig: decodeBigTrigram,
  },
  {
    name: "Z85",
    alphabet: Z85_ALPHABET,
    encode: encodeZ85,
    decode: decodeZ85,
    encodeBig: encodeBigZ85,
    decodeBig: decodeBigZ85,
  },
  {
    name: "Zodiac",
    alphabet: ZODIAC_ALPHABET,
    encode: encodeZodiac,
    decode: decodeZodiac,
    encodeBig: encodeBigZodiac,
    decodeBig: decodeBigZodiac,
  },
];

describe("alphabet integrity", () => {
  for (const { name, alphabet } of alphabets) {
    it(`should have no duplicate characters in ${name}`, () => {
      const chars = new Set(alphabet);
      expect(chars.size).toBe(alphabet.length);
    });
  }
});

describe("round-trip numbers", () => {
  const testNumbers = [
    0, 1, 2, 7, 8, 11, 12, 19, 20, 23, 24, 31, 32, 57, 58, 61, 62, 63, 64, 84, 85, 123, 3843, 3844, 1000000, 0x7fffffff,
    0xffffffff,
  ];

  for (const { name, alphabet, encode, decode } of alphabets) {
    it(`should satisfy round-trip property for numbers in ${name}`, () => {
      for (const n of testNumbers) {
        const encoded = encode(n);
        expect(decode(encoded)).toBe(n);
        expect(decodeNumber(encodeNumber(n, alphabet), alphabet)).toBe(n);
      }
    });
  }
});

describe("round-trip BigInt", () => {
  const testBigInts = [
    0n,
    1n,
    2n,
    7n,
    8n,
    11n,
    12n,
    23n,
    24n,
    61n,
    62n,
    84n,
    85n,
    123n,
    0xffffffffn,
    0xffffffffffffffffn, // 64-bit unsigned max
    0xffffffffffffffffffffffffffffffffn, // 128-bit unsigned max (UUID range)
    115792089237316195423570985008687907853269984665640564039457584007913129639935n, // 256-bit unsigned max
  ];

  for (const { name, alphabet, encodeBig, decodeBig } of alphabets) {
    it(`should satisfy round-trip property for BigInt in ${name}`, () => {
      for (const n of testBigInts) {
        const encoded = encodeBig(n);
        expect(decodeBig(encoded)).toBe(n);
        expect(decodeBigInt(encodeBigInt(n, alphabet), alphabet)).toBe(n);
      }
    });
  }
});

describe("Unicode surrogate pairs and grapheme clusters", () => {
  const customAlphabets = [
    { name: "Smiley emojis (surrogate pairs)", alphabet: "😶🙂🙁😐😉😆" },
    { name: "Hand emojis (variation selectors)", alphabet: "👌☝️✌️🤟🖖🖐" },
    { name: "Moon phases", alphabet: "🌑🌒🌓🌔🌕🌖🌗🌘" },
  ];

  const testNumbers = [0, 1, 5, 6, 255, 1000, 123456789];
  const testBigInts = [0n, 1n, 5n, 6n, 255n, 1000000000000n, 0xffffffffffffffffn];

  for (const { name, alphabet } of customAlphabets) {
    it(`should round-trip numbers with ${name}`, () => {
      for (const n of testNumbers) {
        const encoded = encodeNumber(n, alphabet);
        expect(decodeNumber(encoded, alphabet)).toBe(n);
      }
    });

    it(`should round-trip BigInts with ${name}`, () => {
      for (const n of testBigInts) {
        const encoded = encodeBigInt(n, alphabet);
        expect(decodeBigInt(encoded, alphabet)).toBe(n);
      }
    });
  }
});
