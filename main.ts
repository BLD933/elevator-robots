// make.fun entry: u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f
// Writes one text, at most 200 characters, to /output/entry.txt: one line of awkward small talk
// that one robot says to another while they ride an elevator together.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth. The machine condition is a
// firmware update; the awkwardness is that asking for small talk is itself the confession.
const LINE =
  'Going up? I know. I just wanted to hear someone say it out loud. I have not been spoken to since the firmware update, and I am not certain I was spoken to before it.';

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
