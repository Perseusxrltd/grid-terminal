# Grid-Core

**Private repository for Sovereign Swarm proprietary code.**

> ⚠️ This is the PRIVATE implementation repository. Public documentation is at [grid-terminal](https://github.com/SovereignSwarm/grid-terminal).

---

## Structure

```
Grid-Core/
├── systems/
│   ├── token/programs/       # Rust: Transfer Hook, Fee Sweep
│   ├── identity/programs/    # Rust: Agent Identity Registry
│   ├── payments/x402-solana/ # TypeScript: x402 Protocol
│   ├── governance/           # Constitution, specs
│   ├── security/             # Hunter SDK, monitors
│   └── [20+ modules]
├── terminal/                 # CLI implementation
└── README.md
```

## Devnet Verification Snapshot

Verified against the 2026-03-25 full-state review. This public mirror should not be treated as the canonical deployment registry.

| Component | Verified Status |
|---------|---------|
| $GRID mint (`6VHZbCCPFiDx5FWXq41kmY3YMyJjJKM7Txt1D19uXuLo`) | Exists on devnet, Token-2022, 9 decimals, non-zero supply |
| Agent Identity (`DDira32YctG7h2NW2L3Tt96bNuEVAsNyUxncKrTuz7QH`) | Executable on devnet |
| Policy Guard (`2u4LtXMzdttMEV54jFEWnQrvCbx3TguyvWyfdho7MFRW`) | Executable on devnet |
| veGRID (`4NWkSvbsms4tea4Zn2fQcJ72Hqam15m3MyGtPpPncxeC`) | Executable on devnet |
| Transfer Hook (`DjS53vAF7A6xhQiUS1iAPGqsKNAxjrBPMXAaVyXj4H5f`) | Not verified active in the 2026-03-25 review |

Current caution: the reviewed state contains multiple documented devnet mint addresses, so public docs must avoid implying that deployment reconciliation is complete.

## Security

- **Never commit vault.json or credentials**
- All secrets managed via `.gitignore`
- Private keys in encrypted vault only

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

*Private. Do not share without authorization.*
