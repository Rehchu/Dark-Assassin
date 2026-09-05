# PLAN — the working map

Draco maintains this. Every row is one of **written / stub / decided / open**.
Written means the prose exists in `book-1/`. Decided means the owner's notes
or `notebook/bible/DECISIONS.md` settle it. Open means the owner rules. Keep
it true.

---

## Book One — The Hilt

**Status: drafted end to end.** Twenty-five files in `book-1/` (prologue plus
twenty-four chapters), 89,005 words. Every sentence of the owner's original
scenes (02–07) survives verbatim and in order — checked by
`node tools/check-owner-text.mjs <original> <chapter>` against the pristine
copies in `notebook/owner-originals/`. The continuity contract is
`notebook/bible/` (`CORE.md` for the rules, `DECISIONS.md` for the reasoning,
`skeleton/chNN.md` for entry/exit state per chapter, `owner/chNN.md` for the
owner's numbered sentences).

### What exists

| # | Chapter | Words | POV | Status | One line |
|---|---|---|---|---|---|
| 00 | Prologue | 2,027 | Darneil / Mistress | written | Fourteen years ago: the boy is hidden; she feels one breath of him. |
| 01 | Adoption Papers | 2,415 | Addie | written | The owner's opener, Addie's POV. Felix calls: adoption papers. |
| 02 | Addie's Mom | 3,147 | Addie | written (owner's 25 sentences kept) | Janet's errand and warning; the figure across the street. |
| 03 | The Coffee Shop (part 1) | 3,165 | Addie | written (50 kept) | The waitress who started today; the necklace on, joking — and off, into Addie's hand. |
| 04 | Research | 3,045 | Addie | written (27 kept) | The necklace in her pocket; the empty driveway; obsidian; the fork rune. |
| 05 | The Coffee Shop (part 2) | 3,069 | Addie | written (28 kept) | FaceTime; the return; "Back again are we"; the whisper; Gold and Silver. |
| 06 | The Pawn Shop | 2,874 | Felix | written (43 kept) | The ride; the closed shop; the craftsman recognises his work. |
| 07 | The Man Who Made the Necklace | 2,935 | Felix | written (157 kept, extended) | What it is; keep it on; the seal; the orphanage lot; the unicorn turns. |
| 08 | Riverbend | 3,702 | Felix | written | The lot; the plaque; Diane's three instructions; the MAINTENANCE door. |
| 09 | The Unlocked Basement | 3,172 | Addie | written | The cellar; sage; the wooden door opened a hand's width. "Tomorrow." |
| 10 | Practice | 3,667 | Mistress | written | She felt the door. She practices. She stands at the edge of his block. |
| 11 | The Man Who Kept the Vigil | 3,831 | Darneil | written | Anatole brings word. The Hilt. The wall of dates. |
| 12 | The Door Goes Down | 3,058 | Felix | written | Down, in the rain. The city built on top of something older. |
| 13 | Followed | 3,017 | Addie | written | Taken by Anatole's watchers before Armand's men reach them. |
| 14 | The Leader and His Brother | 3,210 | Felix | written | The truce, all five terms. "Your father is here." |
| 15 | The Shrouded Room | 3,220 | Addie | written | Presented. The apron gone. "You I can see just fine." |
| 16 | Bloodline | 3,465 | Felix | written | The ears. The whisper, whole. The candle bends. |
| 17 | What Janet Knew | 4,472 | Janet, Addie | written | The map. The Knights. The ward. Her mother's mother. |
| 18 | The Hilt of Tyr | 4,820 | Darneil, Felix | written | Father. The knot in the cord. The first letter read. The height marks. |
| 19 | Red Eyes | 3,490 | Mistress, Felix | written | The kept ones. One taken to show him. The bargain. He says no. |
| 20 | The Brother's Gambit | 3,297 | Armand | written | Anatole taken. She walks the old street. |
| 21 | Practice, Interrupted | 3,833 | Felix, Darneil | written | Armand's men cross the rail. The necklace off, on purpose. Shadow on shadow. |
| 22 | Mother | 5,680 | Felix, Leila | written | Cyprien. The third letter by heart. The refusal. The necklace on, in front of her. |
| 23 | The Hilt Decided | 5,565 | Felix, Darneil | written | The oath. Up the stair into daylight. Rapides Regional. The Hilt under his bed. |
| 24 | She Knows Where He Is | 4,829 | Felix | written | Natchitoches named. The table with the leaf in. The window. The last line is hers. |

**Ordering — decided.** The owner's files came in two folders in an order that
read backwards; fixed to follow the day (Coffee Shop 1 → Research → Coffee
Shop 2 → Pawn Shop). The 24-chapter shape is `OUTLINE-BOOK-ONE.md`.

### Decided (reasoning in `notebook/bible/DECISIONS.md`, items A–AB)

- **New names.** Alcide Fontenot (the craftsman). Anatole Bordelon (the
  leader) and Armand Bordelon (his brother). Odile Bordelon, Ti-Jean Lemoine,
  Étienne Delvaux (dead). Robert and Diane Knight. Kayla at the leasing
  office. The kept ones: Loretta Broussard, Curtis Dupre, Terry Guidry, and a
  boy waiting for a ride.
- **Felix's birth name:** Cyprien. Said once to his face (Ch22); Addie hears
  it on the stair (Ch23); he will not say it at the Knights' table (Ch24).
- **The whisper** (Ch5, withheld from the reader until Ch16): "He'll tell you
  never to take it off. He's wrong, baby. Take it off some night, out under
  the sky, and find out what those ears are for. I'll hear you."
- **The charm's rule:** worn is silence; kept for him is a smudge; off is a
  candle in a dark house. Once she has seen his face it can dim him from her
  but never hide him again. Five removals in Book One, no more.
- **Janet Walker** was the orphanage caseworker who chose the Knights, is the
  protectors' contact up top, keeps the ward, and is the buried town's blood
  gone up three generations ago — which is why Addie feels weather.
- **The Mistress wants** her son, then the Hilt out from under her floor,
  and underneath both, to be looked at and not slid off. Nobody in the book
  says *voodoo*; she says "my mother's mothers."
- **The Hilt decided:** Darneil takes the holding poison in the right
  shoulder past the rail (Ch21); his right side does not come back. Custody
  passes to Felix by oath — *I keep the light. I keep it from her. I keep it
  until it's whole.* — and the Hilt goes up the door into a warded Garden
  District apartment.
- **The last page:** Thanksgiving. She is across the street in daylight at
  the exact edge of the quiet. He looks back. He does not take it off. She
  knows where he is.
- **Armand** lives and goes up top with her as her seen face.

### Open — the owner rules

- **DECISIONS N:** the owner's present-tense sentences in 02–06 stand exactly
  as written inside past-tense chapters. Default applied; the owner may
  prefer the seams smoothed.
- **Length of the last act.** Ch17–18 and Ch22–24 run 4,500–5,700 words
  against a 3,000–3,500 target. Nothing was padded; they are long because the
  scenes are. Cut or keep is the owner's call.
- **Chapter 1's POV.** The owner's Ch1 is Addie's; Draco has a local,
  unpushed Felix-POV revision (commit `ef72f54` on his machine). The book as
  drafted follows the owner's Addie POV. Adopting Draco's would re-angle
  Ch1 and the outline's row 51.
- Where the Mistress sleeps up top in Book Two, and what name Armand takes.

---

## Book Two — The Blade

| | |
|---|---|
| The piece | **decided** — the Blade of Tyr |
| Where it is | Natchitoches, "the old fort on the Cane" — fifty miles north. Named on the last page of Book One, never found there. |
| Who guards it | The protectors who kept it are down to one old woman; the piece is in the river. (Sketch — DECISIONS K.) |
| Arc | The Mistress up top with Armand as her seen face. The Hilt carried off from the apartment by ordinary hands. Felix and Addie to Natchitoches. The second letter (first shadow) opened. Darneil in a chair, teaching Felix to *let* the shadow instead of needing it. Closes with two pieces in the Mistress's reach and one in Felix's, and Addie hurt in a way that is not undone. |
| Owed from Book One | The Blade; the second letter; Felix's cold hands and red rim; the Hilt under a bed an ordinary man could reach; Darneil half-removed; a necklace that cannot hide him from her; a gray car nobody remembers. |

## Book Three — The Sword

| | |
|---|---|
| The piece | **decided** — the Pommel, the peace-stone that caps the sword; rumoured in New Orleans, where the bloodline came ashore. |
| The sword whole — what it does, and who it is for | The Hilt binds what holds it. The sword whole binds the shadow in every hand of the line. |
| Ending | **decided** — he binds the line, and the line is himself. Felix, who has spent three books learning to let it, lets it go: binds his mother and himself in one act and becomes ordinary — the thing she feared most, chosen. She, ordinary at last, is looked at by her son and does not slide off his eye. Darneil's full removal comes first (he dies past a rail again, for the same reason). Addie's last line closes where Ch1 began: paper doesn't change who you are, said back to him. |

---

## Characters

Sheets are in `notebook/characters/`; the working sheets with wants, fears,
and speech are in `notebook/bible/CORE.md` (h). Names as canon:

- **Addie Walker** (not Griffiths — a stale name in the storyline note)
- **Felix Knight** (born Cyprien Delvaux)
- **Leila Chattox** — the Mistress; "Lee" on a name tag up top
- **Darneil Delvaux**
- **Janet Walker**
- **Alcide Fontenot** — the pawn-shop craftsman
- **Anatole Bordelon** — the leader of the buried town
- **Armand Bordelon** — his brother
- **Robert and Diane Knight**

---

## Log

Append a line per session: date, what was written, what changed above.

- 2026-09-01 — Repo created from the owner's Scrivener folder. Seven scenes,
  five character sheets, storyline, background stub, the sword note. Handed to
  Draco to finish as a trilogy.
- 2026-09-04 — 24-chapter outline (`OUTLINE-BOOK-ONE.md`); Jackson Street
  named; the "necklace in the gutter" prologue replaces the opener.
- 2026-09-05 — Outline row 51 corrected to Addie's POV for Ch1. The bible
  (`notebook/bible/`): CORE, DECISIONS A–AB, per-chapter skeletons, the
  owner's sentences numbered, briefs for Ch2 and Ch8. Pristine copies of the
  owner's scenes in `notebook/owner-originals/`; `tools/check-owner-text.mjs`.
- 2026-09-05 — Ch2–7 expanded to full chapters around the owner's sentences
  (every sentence checked verbatim and in order). Ch8–24 drafted new from the
  bible. Ch18 patched so Darneil says the three instructions word for word.
  Janet's coat made tan in Ch17–19 so the gray coat on the last page is the
  Mistress's alone. Book One complete at 89,005 words; Books Two and Three
  decided above from DECISIONS K.
