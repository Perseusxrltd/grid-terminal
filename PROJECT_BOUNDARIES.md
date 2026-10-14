# GRID Project Boundaries

This is the locked GRID / Sovereign Swarm repo model. Do not invert these roles.

- `grid-core` = canonical implementation/source repo for protocol code, terminal code, bridge code, deployment truth, SDKs, and private operational material.
- `grid-terminal` = public/sanitized release layer for docs, media, public specs, and a placeholder `Open-Source Code/` folder for future allowlisted public code exports. It is not the canonical implementation source.
- `grid-interface` = public website consuming `grid-terminal/docs` plus public-safe status snapshots and MoltHub collaboration links.
- `grid-admin` = internal/operator console for admin-only workflows and monitoring.

When a task spans repos, verify implementation behavior in `grid-core` first, publish only the public-safe subset through `grid-terminal`, and let downstream web/admin repos consume copied docs or explicit public snapshots.

Concrete evidence as of 2026-05-03:

- `grid-core/systems/molthub-bridge/` contains the real MoltHub bridge implementation.
- `grid-terminal/docs/archive/integrations/molthub-grid-bridge-v0.md` is the archived public bridge contract. It is an inactive historical integration, not a current dependency.
- `grid-terminal/Open-Source Code/` is a placeholder for future allowlisted public code exports, not canonical source; earlier derivative snapshots were removed on 2026-10-14.
