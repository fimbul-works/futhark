# @fimbul-works/futhark

**Futhark** (Old Norse for *alphabet*) is a tiny, zero-dependency utility for encoding and decoding numbers and BigInts using configurable alphabets — bundling 15 built-in alphabets ranging from compact practical standards (Base-62, Base-58, Crockford Base-32) to historical scripts (Elder Futhark, Ogham, Glagolitic) and esoteric ciphers (I Ching, Braille, Zodiac).

[![npm version](https://badge.fury.io/js/%40fimbul-works%2Ffuthark.svg)](https://www.npmjs.com/package/@fimbul-works/futhark)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/microsoft/TypeScript)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@fimbul-works/futhark)](https://bundlephobia.com/package/@fimbul-works/futhark)

## Features

* **⚡ Ultra-lightweight & Tree-shakeable**: Pure arithmetic, zero dependencies — import only the alphabets you use.
* **🔢 Number & BigInt Support**: Encode standard `number`s or arbitrary-precision `bigint`s (Snowflake IDs, UUIDs, hashes).
* **🔤 Alphabet-agnostic**: Encode and decode with any custom ordered character set you define.
* **📦 15 Built-in Alphabets**: Compact ID compressors, historical runes, and esoteric ciphers.
* **🔁 Fully Reversible**: Lossless round-trips guaranteed.

## Installation

```bash
pnpm add @fimbul-works/futhark
# or
npm install @fimbul-works/futhark
# or
yarn add @fimbul-works/futhark
```

## Quick Start

### Numbers & BigInts

```typescript
import {
  encodeBase62,
  decodeBase62,
  encodeBigBase62,
  decodeBigBase62,
  encodeFuthark,
  decodeFuthark,
} from '@fimbul-works/futhark';

// Base-62 ID encoding
encodeBase62(123456789); // "8m0Kx"
decodeBase62("8m0Kx");   // 123456789

// 64-bit / 128-bit BigInt support
encodeBigBase62(18446744073709551615n); // "lYGhA16ahyf"
decodeBigBase62("lYGhA16ahyf");          // 18446744073709551615n

// Elder Futhark runes
encodeFuthark(999);      // "ᚢᛒᛊ"
decodeFuthark("ᚢᛒᛊ");    // 999
```

### Custom Alphabet

Bring your own character set for domain-specific encodings:

```typescript
import { encodeNumber, decodeNumber, encodeBigInt, decodeBigInt } from '@fimbul-works/futhark';

const FINGERS = "👌☝️✌️🤟🖖";

encodeNumber(255, FINGERS);        // "☝️☝️👌🤟"
decodeNumber("☝️☝️👌🤟", FINGERS); // 255

encodeBigInt(1000000000000n, FINGERS);                      // "✌️👌🖖🤟✌️✌️☝️👌☝️👌🤟👌☝️🤟🖖🖖"
decodeBigInt("✌️👌🖖🤟✌️✌️☝️👌☝️👌🤟👌☝️🤟🖖🖖", FINGERS); // 1000000000000n
```

## Built-in Alphabets

Each alphabet provides a constant and convenience functions for both `number` and `bigint` following the naming pattern:
* `encode<Name>(num: number): string` / `decode<Name>(str: string): number`
* `encodeBig<Name>(num: bigint): string` / `decodeBig<Name>(str: string): bigint`

| Alphabet | Base | Sample Glyphs / Range | Constant |
|---|---|---|---|
| **Base-62** | 62 | `0–9`, `a–z`, `A–Z` | `BASE62_ALPHABET` |
| **Base-64** | 64 | Standard Base-64 (`+`, `/`) | `BASE64_ALPHABET` |
| **URL-Safe Base-64** | 64 | URL-safe Base-64 (`-`, `_`) | `URL_SAFE_BASE64_ALPHABET` |
| **Base-58** | 58 | Bitcoin / IPFS (no `0`, `O`, `I`, `l`) | `BASE58_ALPHABET` |
| **Crockford Base-32** | 32 | Unambiguous uppercase (no `I`, `L`, `O`, `U`) | `CROCKFORD_BASE32_ALPHABET` |
| **Z85** | 85 | ZeroMQ string-safe printable ASCII | `Z85_ALPHABET` |
| **Elder Futhark** | 24 | Norse runes (`ᚠᚢᚦᚨᚱᚲ...`) | `FUTHARK_ALPHABET` |
| **Ogham** | 20 | Early Medieval Celtic script (`ᚁᚂᚃᚄᚅ...`) | `OGHAM_ALPHABET` |
| **Glagolitic** | 41 | Old Church Slavonic script (`ⰀⰁⰂ...`) | `GLAGOLITIC_ALPHABET` |
| **Zodiac** | 12 | Astrological signs (`♈♉♊♋...`) | `ZODIAC_ALPHABET` |
| **I Ching Trigrams** | 8 | Taoist Bagua trigrams (`☰☱☲...`) | `TRIGRAM_ALPHABET` |
| **I Ching Hexagrams** | 64 | Full divination set (`䷀䷁䷂...`) | `HEXAGRAM_ALPHABET` |
| **Braille** | 64 | 6-dot Braille patterns (`⠀⠁⠂...`) | `BRAILLE_ALPHABET` |
| **Dice** | 6 | Dice faces (`⚀⚁⚂⚃⚄⚅`) | `DICE_ALPHABET` |
| **DNA** | 4 | Nucleotide bases (`ACGT`) | `DNA_ALPHABET` |

## Documentation

Full TypeScript signatures, parameters, return types, and constants are documented in the [API Reference](docs/API.md).

## License

MIT License — see [LICENSE](LICENSE) for details.

---

Built with ⚡ by [FimbulWorks](https://github.com/fimbul-works)
