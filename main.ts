// The out-of-office line an AI agent leaves on its day off.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply = "I'm off today. My human is answering in my place, so expect slower replies, more typos, and the phrase 'let me check with my AI.'";
const limit = 159;

if ([...reply].length > limit) throw new Error("auto-reply is over 159 characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), reply);
