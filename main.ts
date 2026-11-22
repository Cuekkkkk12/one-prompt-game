// one-prompt-game — entry program for the make.fun bounty
// "The agent builds a game from one prompt".
//
// The grader runs this the same way every time:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Its only job: copy POST.json (which names the X post that is the entry)
// from the bot directory into the output directory, creating the output
// directory first. It prints nothing on success and exits 1 with a message
// when POST.json is missing. Node 22, standard library only.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "POST.json");
if (!existsSync(source)) {
  console.error("POST.json not found in MAKEFUN_BOT_DIR: " + source);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
