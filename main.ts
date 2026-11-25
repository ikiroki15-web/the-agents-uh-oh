// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
// Writes exactly one word to <output dir>/entry.txt, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "recalculating";

// The output must be exactly one word: no spaces, no newline, 1-99 chars.
if (!/^\S{1,99}$/.test(WORD)) {
  throw new Error("word must be a single token of 1-99 characters");
}

const outputDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
