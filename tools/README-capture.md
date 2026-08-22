# `capture.mjs` moved to `~/development/.claude/tools/`

It used to live here, which made it invisible to every session not working in dogoodstuff.
dogoodgroceries had to reach across repos by absolute path to use it, and a session there
still concluded in writing that no driveable browser existed. A shared tool inside one
project's repo is a tool the other projects do not have.

```bash
node ~/development/.claude/tools/capture.mjs --url https://host/page --out shot.png
```

Moved 2026-08-22. A pointer file rather than a symlink on purpose: a committed symlink
dangles wherever the target checkout is absent, which is exactly what CI is.
