# 🔢 JavaScript Signed vs Unsigned Bit Operations

This project demonstrates how JavaScript handles **signed** and **unsigned** 32-bit integers using **bitwise operations**.

JavaScript internally represents all numbers as **64-bit floating point**, but when performing **bitwise operations**, it converts them to **32-bit integers**. This behavior leads to interesting outcomes when working with negative numbers or large unsigned integers.

---

## 📁 Files

- `signedUnsigned.js` – Contains all code examples for converting between signed and unsigned integers, and explaining bitwise operations like `>>>`, `>>`, and `| 0`.

---

## ✅ What You’ll Learn

- Difference between signed (`Int32`) and unsigned (`Uint32`) 32-bit integers
- How to convert between signed and unsigned representations
- Use of bitwise operators in JavaScript:
  - `>>>` – Zero-fill right shift (treats number as unsigned)
  - `>>` – Sign-preserving right shift
  - `| 0` – Forces a number into 32-bit signed form

---

## 🧪 Code Examples

```javascript
let signed = -1;
let unsigned = signed >>> 0;
console.log(unsigned); // 4294967295

let backToSigned = unsigned | 0;
console.log(backToSigned); // -1
