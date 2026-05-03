# GRID Open-Source Code Snapshot

This folder is a public/sanitized derivative snapshot of selected GRID code.

It is not the canonical implementation source. The source of truth for protocol code, terminal internals, bridge code, deployment truth, SDKs, and private operational material is `grid-core`.

---

## Structure

```text
Open-Source Code/
├── systems/
│   ├── token/programs/       # Public derivative Rust snapshots
│   ├── identity/programs/    # Public derivative Anchor snapshots
│   ├── payments/x402-solana/ # Public derivative TypeScript snapshots
│   ├── governance/           # Public governance materials
│   └── security/             # Public SDK snapshots
├── terminal/                 # Public derivative terminal snapshot
└── README.md
```

## Source Boundary

This folder can lag behind `grid-core`, can omit private internals, and can contain sanitized examples. Do not use it to resolve deployment truth, treasury wallets, mint status, or bridge behavior.

Before publishing or implementing from this snapshot, verify the current behavior in `grid-core` and then copy only the public-safe subset here.

## Security

- Never copy private deployment material, credentials, vault files, or security/key-report content into this folder.
- Treat example configs and historical snapshots as illustrative until verified against `grid-core`.
- Keep public release content intentionally sanitized.

## Build

```bash
# Token programs
cd systems/token/programs
anchor build

# x402 SDK
cd systems/payments/x402-solana
npm install && npm run build

# Terminal CLI
cd terminal/terminal
npm install && npm run build
```

---

*Public release snapshot. Not canonical source.*
