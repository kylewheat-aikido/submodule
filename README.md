# shared-utils (submodule)

Small shared library used as a **git submodule** by
[submodules-demo](https://github.com/kylewheat-aikido/submodules-demo).

> Intentionally vulnerable. Demo only, never use in production.

Planted issues (so the scan clearly attributes them to this repo's files):

| File | Issue | Aikido scanner |
|------|-------|----------------|
| `src/db.js` | SQL injection, command injection | SAST |
| `src/config.js` | Hardcoded (fake) AWS keys | Secrets |
| `package.json` | lodash 4.17.15, minimist 1.2.0 | SCA (open source deps) |
