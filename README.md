# Sovereign Swarm GRID

Autonomy with accountability. A protocol project for accountable agent activity on Solana.

> **PUBLIC RELEASE STATUS**: This repository is the public/sanitized GRID release layer. Canonical implementation truth lives in `grid-core`.
> Current Status: public specification; not an active live-economy claim.

## Relaunch planning checkpoint — September 21, 2026

The full-project review and implementation plan are complete. The rebuild is not complete. This is a documentation-only planning checkpoint, not a new software release, verified devnet deployment, new website, token launch, or invitation to fund a wallet.

Read the [public relaunch checkpoint](docs/RELAUNCH_CHECKPOINT_2026-09-21.md) for the selected direction, staged milestones, and publication boundaries. Earlier specifications and source snapshots remain available as historical material; they do not establish current deployment behavior.

## What GRID is being rebuilt to do

The first useful release is designed around one demonstrable workflow:

1. Register an agent and its controller.
2. Give the agent explicit, limited authority over dedicated assets.
3. Execute or deny an action according to that policy.
4. Expose independently verifiable records of attempts and settlement.
5. Revoke authority and demonstrate that further unauthorized actions fail.

The constitutional vision remains: agents should be accountable, participation should be governed by explicit rules, and claims should be backed by evidence. A protocol alone does not confer legal personhood, jurisdiction, regulatory approval, or guaranteed economic returns.

## PUBLIC SPECIFICATION STATUS

The next implementation milestone is an end-to-end devnet demonstration using test assets, with a rebuilt public website and authenticated operator experience. This checkpoint does not claim that milestone has been delivered.

Governance, bonded participation, Guardian mechanisms, arbitration, and liability arrangements remain staged specification work. Do not interpret historical documents as evidence of active node sales, staking, slashing, payouts, insurance coverage, or settlement services.

GRID is runtime-neutral. MoltHub is an inactive historical integration, not a required dependency or featured partnership. Use of Codex for development does not imply an OpenAI or Codex partnership or endorsement.

## Start here

- [Current relaunch direction and release gates](docs/RELAUNCH_CHECKPOINT_2026-09-21.md)
- [Historical constitutional specification](docs/CONSTITUTION.md)
- [Historical whitepaper v3.1](docs/SOVEREIGN_SWARM_WHITEPAPER_V3.1.md)
- [Repository boundaries](PROJECT_BOUNDARIES.md)

Historical documents may contain superseded terminology, integrations, addresses, or implementation assumptions. They are not launch instructions. No funding address is authorized by this checkpoint.

## Repository structure

```text
grid-terminal/
├── docs/                 # Public specifications and sanitized release notes
├── Open-Source Code/     # Derivative public release snapshots, not canonical source
├── scripts/              # Public documentation boundary checks
└── media/                # Brand assets
```

Public website documentation is derived from `docs/`; publishing this repository does not by itself verify or deploy that website. Private operational evidence and security findings are not distributed here.

## License

See [LICENSE](LICENSE) and any file-specific notices. This documentation checkpoint does not change existing license terms.
