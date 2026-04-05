# @fimbul-works/futhark

**Futhark** (Old Norse for *alphabet*) is a tiny, zero-dependency utility for encoding and decoding numbers using configurable alphabets -  with base-62 and Elder Futhark runes bundled out of the box.

[![npm version](https://badge.fury.io/js/%40fimbul-works%2Ffuthark.svg)](https://www.npmjs.com/package/@fimbul-works/futhark)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/microsoft/TypeScript)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@fimbul-works/futhark)](https://bundlephobia.com/package/@fimbul-works/futhark)

## Features

* **⚡ Ultra-lightweight**: Negligible bundle footprint - pure arithmetic, no dependencies.
* **🔤 Alphabet-agnostic**: Encode with any ordered character set you define.
* **🔢 Base-62 built-in**: URL-safe, case-sensitive compact number encoding.
* **ᚠ Elder Futhark built-in**: Encode numbers as runic glyphs using the canonical 24-rune alphabet.
* **🔁 Fully reversible**: Every encode has a matching decode - lossless round-trips guaranteed.

## Installation

```bash
npm install @fimbul-works/futhark
```

## Quick Start

### Base-62 Encoding

```typescript
import { encodeBase62, decodeBase62 } from '@fimbul-works/futhark';

encodeBase62(0);         // "0"
encodeBase62(62);        // "10"
encodeBase62(123456789); // "8m0Kx"

decodeBase62("8m0Kx");   // 123456789
```

### Runic Encoding

```typescript
import { encodeFuthark, decodeFuthark } from '@fimbul-works/futhark';

encodeFuthark(0);   // "ᚠ"
encodeFuthark(24);  // "ᚢᚠ"
encodeFuthark(999); // "ᚢᛒᛊ"

decodeFuthark("ᚢᛒᛊ"); // 999
```

### Custom Alphabet

Bring your own character set for domain-specific encodings:

```typescript
import { encodeNumber, decodeNumber } from '@fimbul-works/futhark';

const DNA = "ACGT";

encodeNumber(0, DNA);   // "A"
encodeNumber(255, DNA); // "TTTT"

decodeNumber("TTTT", DNA); // 255
```

## API

### `encodeNumber(num, alphabet)`

Encodes a non-negative integer into a string using the given alphabet.

| Parameter  | Type     | Description                          |
|------------|----------|--------------------------------------|
| `num`      | `number` | Non-negative integer to encode       |
| `alphabet` | `string` | Ordered character set to encode with |

Returns `string`. Throws on negative input or an empty alphabet.

---

### `decodeNumber(str, alphabet)`

Decodes a string back into a number using the given alphabet.

| Parameter  | Type     | Description                          |
|------------|----------|--------------------------------------|
| `str`      | `string` | Encoded string to decode             |
| `alphabet` | `string` | The same alphabet used to encode     |

Returns `number`. Throws if the string contains characters not in the alphabet.

---

### `encodeBase62(num)` / `decodeBase62(str)`

Convenience wrappers using `BASE62_ALPHABET` (`0–9`, `a–z`, `A–Z`).

### `encodeFuthark(num)` / `decodeFuthark(str)`

Convenience wrappers using `FUTHARK_ALPHABET` (ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ).

### Exported Constants

```typescript
import { BASE62_ALPHABET, FUTHARK_ALPHABET } from '@fimbul-works/futhark';
```

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

Built with ⚡ by [FimbulWorks](https://github.com/fimbul-works)
