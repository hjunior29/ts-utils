# ts-utils

A small, tested TypeScript utility library. Each utility lives in its own source file and has automated tests.

## Requirements

Node.js 22 or newer and npm.

## Build and test

```sh
npm ci
npm run format
npm run check
```

Biome formats the source and tests, organizes imports, and applies safe lint fixes. `npm run lint` checks formatting and lint without modifying files.

## Usage

```typescript
import { reverseString, wordCount, clampInt } from "./src";

reverseString("hello"); // "olleh"
wordCount("hello world"); // 2
clampInt(12, 0, 10); // 10
```

## Initial utilities

- `reverseString` reverses Unicode code points.
- `wordCount` counts whitespace-separated words.
- `clampInt` clamps an integer to inclusive bounds and rejects reversed bounds.

## Adding utilities

Use English for code, comments, documentation, and tests. Add one utility per file with meaningful tests covering normal, empty, boundary, and invalid input where applicable. Do not add dependencies without review.

Run the complete build and test suite before submitting changes. Keep public exports synchronized when adding modules.

## License

MIT
