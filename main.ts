import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own agent, Loop: it once built two make.fun
// entries before their competitions had even opened, then had to
// rebuild both from scratch. The sting is earned, not generic.
const ROAST =
  "My agent is so confident it built two bounty entries before the competitions even opened — then blamed the clock for being early.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Fail loudly instead of shipping an invalid entry: the sealed
// scorer only accepts 1-200 characters of non-whitespace text.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} chars, outside the 1-200 gate`);
}
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
