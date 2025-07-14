### 👩‍🔬 Haskell Mindset: In JavaScript Terms

| 📊 Pillar                    | 🛠️ JS Practice Summary                                             |
| ---------------------------- | ------------------------------------------------------------------ |
| **Pure Functions**           | No side effects. Same input = same output.                         |
| **Immutability**             | Use `Object.freeze()`, avoid mutation (`.push()`, `=`, etc).       |
| **Type-Driven Thinking**     | Model data with intention. Use fallback defaults.                  |
| **Function Composition**     | Chain `.map().filter().reduce()` or use `pipe()` / `compose()`.    |
| **Higher-Order Functions**   | Functions that take/return functions. e.g., `fn => fn2 => result`. |
| **Maybe / Either**           | Wrap uncertain values. Handle `null` with grace.                   |
| **Exhaustive Logic**         | Cover every `if`, `else`, `case`, or default.                      |
| **Laziness (simulated)**     | Use thunks: `() => work()` for delayed eval.                       |
| **Monads (lightweight)**     | Chain safely: `maybe(value).map(fn).unwrap()`.                     |
| **Declarative > Imperative** | Say _what_ you want, not _how_ to do it.                           |
