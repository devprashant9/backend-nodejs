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

