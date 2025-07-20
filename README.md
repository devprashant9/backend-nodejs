# Backend Using Node JS (Understanding Backend in Depth)

> Prerequisites Required for Better Understanding

- Understanding the Backend Technologies
- Basics of Terminal (`Linux`)
- Basics of `Operating System`
- Basics of `Networking`
- Good Knowledge of `JavaScript`

---

## Fundamentals of Node JS

- Understanding `commonJS` Module System

  1. `require()` is a function
  2. `module.exports = ...` is its return value. It can be array as well.
  3. a function when called can only return a single value
  4. difference between `module.exports` vs `exports`
  5. understanding `module` object and `local variables`
  6. how to use `isPreloading` by using _node --require ./math.js app.js_
  7. `module wrapper` function importance. Every module is wrapped using this wrapper
  8. creating `custom module wrapper` function

- Understanding `ES6` Module System

  1. different types of `import` and `export` syntax with aliases
  2. enabling `commonJS` and `module` in _package.json_ file
  3. different types of file extensions, like **js, cjs, mjs**
  4. by default variables goes to `module scope` and `use strict` is enabled
  5. for module files `.js` extension is necessary. React automatically handles it.
  6. the `import.meta` inside _module_ system. Available in browser also.
  7. reason for different types of module system
  8. difference between `import` and `require`
  9. what are `npm modules` and how to create and publish `npm package`

- understanding `package.json` file in detail

- understanding `npx` in detail

  1. importance of `package.json` file and its features
  2. what is `shebang` and how it works
  3. what is `npx` at granular level and how it works using `shebang`
  4. how to use `env` to apply same shebang syntax for different OS

- understanding `fs/promises` module in detail
  1. rename a file, folder
  2. create a file, write in a file, append a file
  3. delete file, directory, non-empty directory

While working with a file for normal operations (read, write, append, delete) we directly have methods on `fs/promises`. However, if we want more control over file then we use `fileHandle`. It is basically used to control file at a more granular level. We can read our file in **chunks** which is very helpful. More clarity on it after reading `Buffer` and `Streams` chapters.

---

## Data Representation in Computers

- decimal number system

  1. works in base 10
  2. numbers associated `0 1 2 3 4 5 6 7 8 9`
  3. uses no prefix

- octal number system

  1. works in base 8
  2. numbers associated `0 1 2 3 4 5 6 7`
  3. uses prefix `0o`

- binary number system

  1. works in base 2
  2. numbers associated `0 1`
  3. uses prefix `0b`

- hexadecimal number system
  1. works in base 16
  2. numbers associated `0 1 2 3 4 5 6 7 8 9 A B C D E F`
  3. uses prefix `0x`

In JavaScript (and Node.js), numbers are interpreted as decimal by default unless specified otherwise `(like binary 0b, octal 0o, or hexadecimal 0x)`. Internally, all numbers are processed in binary during computation. We can also use `parseInt(string, ?.radix)` and `number.toString(radix)` for conversion of one form to another.

- Digital Data Unit

  1. smallest unit of data is 1 bit
  2. there are two main system for measuring data units `SI vs IEC`
  3. in case of **SI System => 1KiloByte = 1000 Bytes**
  4. in case of **IEC System => 1KibiByte = 1024 Bytes**
  5. bit => nibble => byte => kibi => mibi => gibi => tb ...
  6. majority systems uses IEC format

- Character Sets

  1. list of characters available
  2. text, numbers, or any kind of letters
  3. each of the characters is assigned a numbers
  4. `ASCII` and `UNICODE` are examples
  5. **UNICODE** is backward compatible with **ASCII** values

- Character Encodings

  1. format of storing a character in binary format
  2. ASCII Encoding uses `7-bits`, thus maximum is 2<sup>7</sup> = 256
  3. UTF-8 use 8-bits to represent a number
  4. Also, Unicode contains `1.1 Million Characters` and all can be represented by using UTF-8
  5. This is because of a `unique way of representing` them in numbers
  6. Other examples `UTF-16 UTF-32`

- Understanding UTF-8 in Depth

  1. uses `variable bytes` for encoding a character
  2. bash command `xxd -b fileName` to view file in binary format
  3. bash command `xxd -g 1 fileName` to view each group individually
  4. a file should be `saved and re-opened` with `same encoding` or else will show different text
  5. it must be kept in mind that at the low level data is stored in binary only but with a different grouping of bits
  6. UTF-8 is capable of storing data represented by 1Byte, 2Byte, 3Byte, 4Byte
  7. for representing a single byte data, always starts with a _Zero as Header_ i.e. `0xxxxxxx`, thus max is \*_01111111_
  8. for 2 bytes `110xxxxx 10xxxxxx`, the **110 and 10** acts as header
  9. for 3 bytes `1110xxxx 10xxxxxx 10xxxxxx`
  10. for 4 bytes `11110xxxx 10xxxxxx 10xxxxxx 10xxxxxx`

- Understanding UTF-16

  1. a file saved with UTF-16 encoding already has a size of 2 bytes and uses 2 bytes or 16 bits for a character
  2. this is because of these header `fffe` and `feff`, thus we have 2 versions `UTF-16LE` and `UTF-16BE`
  3. It has uses variable bits to represented all the characters

- Understanding UTF-32

  1. uses fixed size bits i.e. 32 bits for character representation
  2. takes up space but fast because no dealing with headers

- Endianess and Byte Order Mark
  1. a given data `0x425A` can be either be stored in `425A` or `5A42`
  2. `5A42` format is more intuitive for computers thus majority manufacturers uses this
  3. the header which decides this format is the `Byte Order Mark` represented by `feff` or `fffe`
  4. the foramt `425A` is known as `Big Endian`, name from _Gullivers Travel_
  5. the foramt `5A42` is known as `Little Endian`
  6. Node JS only understands Little Endian
  7. we can add `BOM` to UTF-8 as well

---

## Buffers in Node JS

- understanding `ArrayBuffer` in JavaScript
  1. signed vs unSigned values and how are they stored
  2. reading and writing `ArrayBuffer` using `DataView`
  3. how to write multibytes data
  4. what are `typed arrays`
  5. `Buffer` class in Node JS
  6. difference between `alloc vs allocUnsafe vs from`
  7. why is `allocUnsafe()` faster and `Buffer Pool`
  8. methods on `buffer instance` mainly like `Arrays`
  9. `limitations` of using Buffer
  10. `base64 encoding` and how it works on `binary data`

---
