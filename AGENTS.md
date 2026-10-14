# AGENTS.md

This repo is `grid-terminal`, the public-facing documentation and open-source release surface for the Grid project.
Use it for public specs and sanitized release content, not as the unquestioned source of private implementation truth.

## Canonical Project Boundaries

This is the locked GRID / Sovereign Swarm repo model. Do not invert these roles.

- `grid-core` = canonical implementation/source repo for protocol code, terminal code, bridge code, deployment truth, SDKs, and private operational material.
- `grid-terminal` = public/sanitized release layer for docs, media, public specs, and a placeholder `Open-Source Code/` folder for future allowlisted public code exports. It is not the canonical implementation source.
- `grid-interface` = public website consuming `grid-terminal/docs` plus public-safe status snapshots and MoltHub collaboration links.
- `grid-admin` = internal/operator console for admin-only workflows and monitoring.

When a task spans repos, verify implementation behavior in `grid-core` first, publish only the public-safe subset through `grid-terminal`, and let downstream web/admin repos consume copied docs or explicit public snapshots.

## Project Map

- `grid-core` = canonical implementation/source repo
- `grid-terminal` = public/sanitized release layer
- `grid-interface` = public website and public-facing API routes
- `grid-admin` = internal/operator console and admin-only web flows

## Work Routing

- Use this repo for whitepaper, protocol specs, legal text, roadmap material, and public release curation.
- Use `grid-core` for Anchor programs, backend API logic, SDKs, security services, and terminal internals.
- Use `grid-interface` for public web UX and site integrations that consume these docs.
- Use `grid-admin` for internal/operator surfaces.
- If a task changes implementation behavior, update `grid-core` first and then reflect the public-safe subset here.

## Source Of Truth

- Public docs are authored in `docs/` here; downstream website doc folders are copied render targets.
- `Open-Source Code/` is a placeholder for future allowlisted public code exports (earlier snapshots were removed on 2026-10-14); it must not be assumed to match `grid-core` or to be the implementation source of truth.
- Program IDs, mint addresses, treasury wallets, and network settings must be verified against current implementation and deployment config before publication.
- README values and roadmap text are advisory narrative, not runtime configuration.
- When website docs need updates, edit here first and let downstream sync scripts copy the content.

## Security Boundaries

- Do not copy private implementation details, sensitive operational material, or security/key-report content from `grid-core` into this public repo.
- Keep public release content intentionally sanitized and review whether any detail belongs in open source before adding it.
- Treat example configs and placeholders cautiously; they may be stale, illustrative, or production-like without being current.
- Do not instruct agents to hand-edit copied docs in web repos as the primary fix path.

## Launch Plan

- The public, sanitized launch plan is `docs/LAUNCH_PLAN.md`. Update it at each release stage; never add private findings, addresses outside a release manifest, private-repo links or funding instructions (`scripts/verify-boundaries.mjs` enforces this).
- `main` is the only long-lived branch. Work arrives through short-lived PR branches; nothing historical is kept as a branch in this public repo.

## Known Drift

- `grid-terminal` and `grid-core` are only partially mirrored and are not a strict 1:1 pair.
- Mint/program IDs differ across repos and docs; verify instead of copying by sight.
- `grid-interface` syncs docs from this repo via a sibling-repo path, while `grid-admin` still points at a legacy docs path.
- `Open-Source Code/` holds no code until the reviewed v1 export is published; compare against `grid-core` before assuming parity with anything exported later.
