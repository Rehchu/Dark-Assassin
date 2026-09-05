#!/usr/bin/env node
// Verify that every sentence of an owner-written scene survives, word for word
// and in order, inside its expanded chapter.
//
//   node tools/check-owner-text.mjs <original.md> <expanded.md>
//
// Punctuation, quotation marks, capitalisation and spacing are ignored (those
// may be fixed silently); WORDS may not change. Prints JSON:
//   { ok, total, missing: [{ n, sentence }], outOfOrder: [n...] }
// Exit code 0 when ok, 1 otherwise. Deterministic — no model involved.

import { readFileSync } from 'node:fs';

const [orig, expanded] = process.argv.slice(2);
if (!orig || !expanded) { console.error('usage: check-owner-text.mjs <original.md> <expanded.md>'); process.exit(2); }

const norm = s => String(s)
  .replace(/[‘’‚‛]/g, "'").replace(/[“”„‟]/g, '"')
  .toLowerCase()
  .replace(/[^a-z0-9\s]+/g, ' ')   // drop all punctuation (apostrophes too: don't / dont both become dont)
  .replace(/\s+/g, ' ').trim();
const words = s => norm(s).split(' ').filter(Boolean);

// Body only — the "# Title" line is not one of the owner's sentences.
const body = f => readFileSync(f, 'utf8').split('\n').filter(l => !/^#\s/.test(l)).join('\n');

// Split the original into sentences at ., !, ? (with optional closing quote/paren),
// followed by whitespace or end. The owner's odd tags ("Asks her mom.") become
// their own sentences, which is exactly right — they must survive too.
const sentences = body(orig)
  .replace(/\s+/g, ' ')
  .split(/(?<=[.!?…]["”’')\]]*)\s+(?=\S)/)
  .map(s => s.trim()).filter(s => words(s).length >= 2);

const hay = words(body(expanded));
function findSeq(needle, from) {
  outer: for (let i = from; i + needle.length <= hay.length; i++) {
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) continue outer;
    return i;
  }
  return -1;
}

const missing = [], outOfOrder = [];
let cursor = 0;
sentences.forEach((s, idx) => {
  const n = idx + 1, needle = words(s);
  let at = findSeq(needle, cursor);
  if (at < 0) {
    const anywhere = findSeq(needle, 0);
    if (anywhere < 0) missing.push({ n, sentence: s });
    else outOfOrder.push(n);
  } else cursor = at + needle.length;
});

const ok = missing.length === 0 && outOfOrder.length === 0;
console.log(JSON.stringify({ ok, total: sentences.length, expandedWords: hay.length, missing, outOfOrder }, null, 1));
process.exit(ok ? 0 : 1);
