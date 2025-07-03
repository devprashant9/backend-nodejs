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
