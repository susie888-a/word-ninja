# Update workflow

This workflow protects the verified v16 learning flow while making each
content update reviewable.

## 1. Change only the intended layer

- Learning flow, definitions, or quiz behavior: update the relevant v16
  enhancement script and/or `public/vocabulary-import.js`.
- Core layout or calendar/settings behavior: change `app-v11.html` only after
  checking the iframe chain in `ARCHITECTURE.md`.
- Never use an archived page as a production entry point.

## 2. Preview locally

Serve `public/` on a local static server and open:

```text
http://localhost:8765/app-v16-preview-server.html
```

Wait until the top-right preview indicator reports that the v16 layer has
loaded. Verify all four tabs: 背诵, 日历, 测验, 设置.

For a learning-flow update, also verify:

1. The memorization card shows English only.
2. Each response enters the independent explanation page.
3. The explanation page keeps Chinese meanings compact on one line and shows
   definitions and examples before the next word.
4. A definition-guess question appears in the quiz and still has a valid answer.

## 3. Validate before commit

Run syntax checks for changed JavaScript and inspect the staged diff. For a
vocabulary release, confirm the intended word count, that Chinese meanings are
present, and that definition-guess questions have English definitions.

```powershell
node --check public/v16-preview-enhancements.js
node --check public/v16-preview-exam-mode.js
git diff --check
git status --short
```

## 4. Publish deliberately

1. Commit only reviewed production files, documentation, and intentional
   archive moves.
2. Push `main`.
3. Wait for the GitHub Pages workflow to succeed.
4. Open the deployed entry page and repeat the four-tab smoke test.

## Local experiments and history

- `.local/` is ignored and is for unverified previews, scratch HTML, and
  extraction experiments. Its contents must not be published.
- `archive/ui-versions/` contains former tracked UI pages. Git preserves their
  prior history through the recorded moves.
- Root-level extraction and vocabulary scripts intentionally remain in place
  for now because several use relative paths and local dictionary resources.
  Refactor them only in a dedicated, separately validated change.
