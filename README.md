# 🌌 Transit Messenger – Haskell-Inspired Warm-Up

A warm-up CLI project designed to help me practice Haskell-like functional thinking in JavaScript before my interview. It’s designed to model data immutably, handle edge cases safely, and output emotionally intelligent messages — all through pure functions and clean, testable logic.

---

## 🎯 Objective

Build a functional CLI tool that:

- Accepts a `user` object with a natal chart and birth time
- Accepts a list of planetary `transits`
- Filters for _major transits_ (e.g., Square, Opposition)
- Generates emotionally resonant messages for each transit
- Handles missing birth time safely with a `maybe()` wrapper
- Outputs messages to the terminal
- Has full Jest test coverage for all pure logic

---

## 🧠 Concepts Practiced

| Concept                  | Skill Demonstrated                        |
| ------------------------ | ----------------------------------------- |
| Functional purity        | No side effects, testable code            |
| Data modeling            | Using JS objects to simulate ADTs         |
| Higher-order functions   | Using `.map()`, `.filter()`, `.reduce()`  |
| Maybe/Either pattern     | Safe handling of null values              |
| Composition over nesting | Clean, declarative pipelines              |
| Type-driven thinking     | Naming + structure to mimic Haskell types |
| Empathetic design        | Soft fallback messages for missing data   |
| Unit testing             | Using Jest to test pure logic             |

---

## 🧱 Project Structure

```
project/
├── index.js
├── lib/
│   ├── maybe.js            # Nullable-safe wrapper
│   ├── transits.js         # Filtering logic
│   └── messages.js         # Message generation
├── test/
│   ├── maybe.test.js       # Tests for maybe
│   └── messages.test.js    # Tests for message formatting
├── data/
│   ├── user.js             # Sample user data
│   └── transits.js         # Sample transit data
├── babel.config.js
├── jest.config.js
├── package.json
└── README.md
```

---

## 🛠️ Setup

### Install dependencies:

```bash
npm install
```

### Run the CLI:

```bash
node index.js
```

### Run tests:

```bash
npm test
```

---

## 🧲 Functional Requirements

### 1. Model the following:

#### `User`

```js
{
  name: "Dakota",
  birthTime: "1992-05-11T09:22:00" | null,
  natalChart: [Planet]
}
```

#### `Transit`

```js
{
  type: "Square" | "Opposition" | "Conjunction" | "Trine",
  planet: Planet,
  natalPlanet: Planet
}
```

#### `Planet`

```js
{
  name: "Mars",
  sign: "Leo",
  degree: 17.0
}
```

---

### 2. Pure Functions

Implement the following in `/lib`:

- `maybe(value)` – a Maybe-style wrapper
- `filterMajorTransits(transits)` – filters to Squares and Oppositions
- `formatTransitMessage(transit)` – returns a poetic string
- `generateMessages(transits)` – maps to a list of messages

Each function must be:

- Pure
- Deterministic
- Easy to test in isolation

---

### 3. CLI Behavior

In `cli/index.js`, use:

- `data/user.js` and `data/transits.js`
- Fallback if `user.birthTime` is null
- Log each message to the terminal

---

### 4. Testing

Use Jest to create test files for:

- `lib/maybe.js`
- `lib/transits.js`
- `lib/messages.js`

Test for:

- Correct functional output
- Handling of null/undefined values
- Graceful fallbacks

---

## 💬 Example Output

When birthTime is present:

```
🌕 Mars square Moon: Energies may be in tension.
🚰 Saturn opposition Sun: Energies may be in tension.
```

When birthTime is missing:

```
🌫️ Birth time missing. Please enter your time of birth to receive personalized transits.
```

---

## 🌈 Stretch Goals

- Accept CLI args like `--birthtime` or `--tone serious`
- Group messages by planet or type
- Export results to a `.txt` file
- Use a `Result` type instead of fallback strings
- Port to TypeScript or Haskell

---

## 🧘 Intention

This warm-up is not about speed. It’s about clarity of thought, expressive structure, and safety in logic.

**Write code like a spell. Pure, resilient, and full of meaning.**
