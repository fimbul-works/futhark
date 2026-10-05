# @fimbul-works/futhark

## Variables

### BASE58\_ALPHABET

```ts
const BASE58_ALPHABET: string = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
```

Base-58 alphabet (Bitcoin/IPFS standard, excluding 0, O, I, l)

***

### BASE62\_ALPHABET

```ts
const BASE62_ALPHABET: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
```

Base-62 alphabet

***

### BASE64\_ALPHABET

```ts
const BASE64_ALPHABET: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";
```

Base-64 alphabet

***

### BRAILLE\_ALPHABET

```ts
const BRAILLE_ALPHABET: string = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿";
```

Braille 6-dot patterns alphabet

***

### CROCKFORD\_BASE32\_ALPHABET

```ts
const CROCKFORD_BASE32_ALPHABET: string = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
```

Crockford's Base-32 alphabet (excluding I, L, O, U)

***

### DICE\_ALPHABET

```ts
const DICE_ALPHABET: string = "⚀⚁⚂⚃⚄⚅";
```

Dice face alphabet (1-6 pips)

***

### DNA\_ALPHABET

```ts
const DNA_ALPHABET: string = "ACGT";
```

DNA nucleotide alphabet (Adenine, Cytosine, Guanine, Thymine)

***

### FUTHARK\_ALPHABET

```ts
const FUTHARK_ALPHABET: string = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";
```

Futhark alphabet (canonical order)

***

### GLAGOLITIC\_ALPHABET

```ts
const GLAGOLITIC_ALPHABET: string = "ⰀⰁⰂⰃⰄⰅⰆⰇⰈⰊⰋⰌⰍⰎⰏⰐⰑⰒⰓⰔⰕⰖⰗⰘⰙⰚⰛⰜⰝⰞⰟⰠⰡⰢⰣⰤⰥⰦⰧⰨ";
```

Glagolitic alphabet (canonical order)

***

### HEXAGRAM\_ALPHABET

```ts
const HEXAGRAM_ALPHABET: string = "䷀䷁䷂䷃䷄䷅䷆䷇䷈䷉䷊䷋䷌䷍䷎䷏䷐䷑䷒䷓䷔䷕䷖䷗䷘䷙䷚䷛䷜䷝䷞䷟䷠䷡䷢䷣䷤䷥䷦䷧䷨䷩䷪䷫䷬䷭䷮䷯䷰䷱䷲䷳䷴䷵䷶䷷䷸䷹䷺䷻䷼䷽䷾䷿";
```

I Ching Hexagrams alphabet

***

### OGHAM\_ALPHABET

```ts
const OGHAM_ALPHABET: string = "ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᛁ";
```

Ogham alphabet (canonical order)

***

### TRIGRAM\_ALPHABET

```ts
const TRIGRAM_ALPHABET: string = "☰☱☲☳☴☵☶☷";
```

I Ching Trigrams alphabet

***

### URL\_SAFE\_BASE64\_ALPHABET

```ts
const URL_SAFE_BASE64_ALPHABET: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
```

URL-safe base-64 alphabet

***

### Z85\_ALPHABET

```ts
const Z85_ALPHABET: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#";
```

Z85 (ZeroMQ Base-85) alphabet

***

### ZODIAC\_ALPHABET

```ts
const ZODIAC_ALPHABET: string = "♈♉♊♋♌♍♎♏♐♑♒♓";
```

Zodiac alphabet (canonical order)

## Functions

### decodeBase58()

```ts
function decodeBase58(str): number;
```

Decodes a base-58 string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The base-58 string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeBase62()

```ts
function decodeBase62(str): number;
```

Decodes a base-62 string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The base-62 string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeBase64()

```ts
function decodeBase64(str): number;
```

Decodes a base-64 string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The base-64 string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeBigBase58()

```ts
function decodeBigBase58(str): bigint;
```

Decodes a base-58 string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The base-58 string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigBase62()

```ts
function decodeBigBase62(str): bigint;
```

Decodes a base-62 string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The base-62 string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigBase64()

```ts
function decodeBigBase64(str): bigint;
```

Decodes a base-64 string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The base-64 string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigBraille()

```ts
function decodeBigBraille(str): bigint;
```

Decodes a Braille string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Braille string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigCrockfordBase32()

```ts
function decodeBigCrockfordBase32(str): bigint;
```

Decodes a Crockford's Base-32 string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Crockford's Base-32 string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigDice()

```ts
function decodeBigDice(str): bigint;
```

Decodes a Dice string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Dice string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigDNA()

```ts
function decodeBigDNA(str): bigint;
```

Decodes a DNA nucleotide sequence string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The DNA string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigFuthark()

```ts
function decodeBigFuthark(str): bigint;
```

Decodes a runic string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The runic string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigGlagolitic()

```ts
function decodeBigGlagolitic(str): bigint;
```

Decodes a Glagolitic string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Glagolitic string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigHexagram()

```ts
function decodeBigHexagram(str): bigint;
```

Decodes an I Ching Hexagram string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Hexagram string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigInt()

```ts
function decodeBigInt(str, alphabet): bigint;
```

Decodes a BigInt from a specified alphabet string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The alphabet-encoded string to decode. |
| `alphabet` | `string` | The alphabet to use for decoding. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigOgham()

```ts
function decodeBigOgham(str): bigint;
```

Decodes an Ogham string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Ogham string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigTrigram()

```ts
function decodeBigTrigram(str): bigint;
```

Decodes an I Ching Trigram string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Trigram string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigURLSafeBase64()

```ts
function decodeBigURLSafeBase64(str): bigint;
```

Decodes a URL-safe base-64 string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The URL-safe base-64 string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigZ85()

```ts
function decodeBigZ85(str): bigint;
```

Decodes a Z85 string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Z85 string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBigZodiac()

```ts
function decodeBigZodiac(str): bigint;
```

Decodes a Zodiac string to a BigInt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Zodiac string to decode. |

#### Returns

`bigint`

The decoded BigInt.

***

### decodeBraille()

```ts
function decodeBraille(str): number;
```

Decodes a Braille string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Braille string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeCrockfordBase32()

```ts
function decodeCrockfordBase32(str): number;
```

Decodes a Crockford's Base-32 string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Crockford's Base-32 string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeDice()

```ts
function decodeDice(str): number;
```

Decodes a Dice string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Dice string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeDNA()

```ts
function decodeDNA(str): number;
```

Decodes a DNA nucleotide sequence string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The DNA string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeFuthark()

```ts
function decodeFuthark(str): number;
```

Decodes a runic string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The base-62 string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeGlagolitic()

```ts
function decodeGlagolitic(str): number;
```

Decodes a Glagolitic string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Glagolitic string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeHexagram()

```ts
function decodeHexagram(str): number;
```

Decodes an I Ching Hexagram string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Hexagram string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeNumber()

```ts
function decodeNumber(str, alphabet): number;
```

Decodes a number from a specified alphabet string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The alphabet-encoded string to decode. |
| `alphabet` | `string` | The alphabet to use for decoding. |

#### Returns

`number`

The decoded number.

***

### decodeOgham()

```ts
function decodeOgham(str): number;
```

Decodes an Ogham string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Ogham string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeTrigram()

```ts
function decodeTrigram(str): number;
```

Decodes an I Ching Trigram string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Trigram string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeURLSafeBase64()

```ts
function decodeURLSafeBase64(str): number;
```

Decodes a URL-safe base-64 string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The URL-safe base-64 string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeZ85()

```ts
function decodeZ85(str): number;
```

Decodes a Z85 string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Z85 string to decode. |

#### Returns

`number`

The decoded number.

***

### decodeZodiac()

```ts
function decodeZodiac(str): number;
```

Decodes a Zodiac string to a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The Zodiac string to decode. |

#### Returns

`number`

The decoded number.

***

### encodeBase58()

```ts
function encodeBase58(num): string;
```

Encodes a number to a base-58 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The base-58 encoded string.

***

### encodeBase62()

```ts
function encodeBase62(num): string;
```

Encodes a number to base-62 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The base-62 encoded string.

***

### encodeBase64()

```ts
function encodeBase64(num): string;
```

Encodes a number to base-64 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The base-64 encoded string.

***

### encodeBigBase58()

```ts
function encodeBigBase58(num): string;
```

Encodes a BigInt to a base-58 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The base-58 encoded string.

***

### encodeBigBase62()

```ts
function encodeBigBase62(num): string;
```

Encodes a BigInt to base-62 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The base-62 encoded string.

***

### encodeBigBase64()

```ts
function encodeBigBase64(num): string;
```

Encodes a BigInt to base-64 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The base-64 encoded string.

***

### encodeBigBraille()

```ts
function encodeBigBraille(num): string;
```

Encodes a BigInt to a Braille string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Braille encoded string.

***

### encodeBigCrockfordBase32()

```ts
function encodeBigCrockfordBase32(num): string;
```

Encodes a BigInt to a Crockford's Base-32 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Crockford's Base-32 encoded string.

***

### encodeBigDice()

```ts
function encodeBigDice(num): string;
```

Encodes a BigInt to a Dice string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Dice encoded string.

***

### encodeBigDNA()

```ts
function encodeBigDNA(num): string;
```

Encodes a BigInt to a DNA nucleotide sequence string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The DNA encoded string.

***

### encodeBigFuthark()

```ts
function encodeBigFuthark(num): string;
```

Encodes a BigInt to a runic string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The runic encoded string.

***

### encodeBigGlagolitic()

```ts
function encodeBigGlagolitic(num): string;
```

Encodes a BigInt to a Glagolitic string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Glagolitic encoded string.

***

### encodeBigHexagram()

```ts
function encodeBigHexagram(num): string;
```

Encodes a BigInt to an I Ching Hexagram string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Hexagram encoded string.

***

### encodeBigInt()

```ts
function encodeBigInt(num, alphabet): string;
```

Encodes a BigInt using a specified alphabet string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |
| `alphabet` | `string` | The alphabet to use for encoding. |

#### Returns

`string`

The alphabet encoded string.

***

### encodeBigOgham()

```ts
function encodeBigOgham(num): string;
```

Encodes a BigInt to an Ogham string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Ogham encoded string.

***

### encodeBigTrigram()

```ts
function encodeBigTrigram(num): string;
```

Encodes a BigInt to an I Ching Trigram string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Trigram encoded string.

***

### encodeBigURLSafeBase64()

```ts
function encodeBigURLSafeBase64(num): string;
```

Encodes a BigInt to an URL-safe base-64 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The URL-safe base-64 encoded string.

***

### encodeBigZ85()

```ts
function encodeBigZ85(num): string;
```

Encodes a BigInt to a Z85 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Z85 encoded string.

***

### encodeBigZodiac()

```ts
function encodeBigZodiac(num): string;
```

Encodes a BigInt to a Zodiac string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `bigint` | The BigInt to encode. |

#### Returns

`string`

The Zodiac encoded string.

***

### encodeBraille()

```ts
function encodeBraille(num): string;
```

Encodes a number to a Braille string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Braille encoded string.

***

### encodeCrockfordBase32()

```ts
function encodeCrockfordBase32(num): string;
```

Encodes a number to a Crockford's Base-32 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Crockford's Base-32 encoded string.

***

### encodeDice()

```ts
function encodeDice(num): string;
```

Encodes a number to a Dice string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Dice encoded string.

***

### encodeDNA()

```ts
function encodeDNA(num): string;
```

Encodes a number to a DNA nucleotide sequence string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The DNA encoded string.

***

### encodeFuthark()

```ts
function encodeFuthark(num): string;
```

Encodes a number to a runic string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The runic encoded string.

***

### encodeGlagolitic()

```ts
function encodeGlagolitic(num): string;
```

Encodes a number to a Glagolitic string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Glagolitic encoded string.

***

### encodeHexagram()

```ts
function encodeHexagram(num): string;
```

Encodes a number to an I Ching Hexagram string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Hexagram encoded string.

***

### encodeNumber()

```ts
function encodeNumber(num, alphabet): string;
```

Encodes a number using a specified alphabet string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |
| `alphabet` | `string` | The alphabet to use for encoding. |

#### Returns

`string`

The alphabet encoded string.

***

### encodeOgham()

```ts
function encodeOgham(num): string;
```

Encodes a number to an Ogham string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Ogham encoded string.

***

### encodeTrigram()

```ts
function encodeTrigram(num): string;
```

Encodes a number to an I Ching Trigram string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Trigram encoded string.

***

### encodeURLSafeBase64()

```ts
function encodeURLSafeBase64(num): string;
```

Encodes a number to an URL-safe base-64 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The URL-safe base-64 encoded string.

***

### encodeZ85()

```ts
function encodeZ85(num): string;
```

Encodes a number to a Z85 string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Z85 encoded string.

***

### encodeZodiac()

```ts
function encodeZodiac(num): string;
```

Encodes a number to a Zodiac string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `num` | `number` | The number to encode. |

#### Returns

`string`

The Zodiac encoded string.
