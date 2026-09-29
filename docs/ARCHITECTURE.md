# Word Ninja architecture

## Production entry point

GitHub Pages publishes the `public/` directory. The live entry point is
`public/index.html`, which redirects to `app-v16-preview-server.html`.

The current, verified runtime chain is:

```text
index.html
  -> app-v16-preview-server.html
    -> app-v16.html
      -> app-v15.html
        -> app-v11.html
          + vocabulary-import.js
    + v16-preview-enhancements.js
      + v16-preview-exam-mode.js
```

`app-v11.html` is the learning, calendar, and settings core. The v16 preview
layer deliberately extends that core at runtime: it adds the four-item
navigation, the Chinese-learning review flow, and the quiz/exam experience.
Do not replace this chain with a historical standalone page unless the full
learning, calendar, quiz, and settings flow has been verified again.

## Learning data

All progress is local to the browser. No user learning record is sent to a
server.

| Browser key | Purpose |
| --- | --- |
| `ninja11` | profile, level, daily target, learning queue, review dates, calendar history, and word counts |
| `ninja16Adaptive` | adaptive mastery record used by the v16 learning and exam layer |

Clearing site data resets learning progress. A browser or device change does
not carry progress over automatically.

## Vocabulary data

`public/vocabulary-import.js` exposes `window.WORD_NINJA_IMPORTED`, grouped by
`basic`, `exam`, and `pro`. Entries supply the word, pronunciation, Chinese
meaning, example material, Oxford-derived English definitions, and display
meanings where available. The shipped data is curated from the local dictionary
resources and must be validated before release.

## Source-of-truth rule

The rendered page at `app-v16-preview-server.html` is the current visual and
behavioral baseline. Historical pages are retained in `archive/ui-versions/`
for traceability only; they are not published and are not runtime dependencies.
