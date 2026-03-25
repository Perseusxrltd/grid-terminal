# AGENTS.md

This repo is `grid-terminal`, the public-facing documentation and open-source release surface for the Grid project.
Use it for public specs and sanitized release content, not as the unquestioned source of private implementation truth.

## Project Map

- `grid-core` = private implementation and contract/API source
- `grid-terminal` = public docs and sanitized/open-source release surface
- `grid-interface` = public web app, node sale UI, and website API routes
- `grid-admin` = internal/operator dashboard and admin-only web flows

## Work Routing

- Use this repo for whitepaper, protocol specs, legal text, roadmap material, and public release curation.
- Use `grid-core` for Anchor programs, backend API logic, SDKs, security services, and terminal internals.
- Use `grid-interface` for public web UX and site integrations that consume these docs.
- Use `grid-admin` for internal/operator surfaces.
- If a task changes implementation behavior, update `grid-core` first and then reflect the public-safe subset here.

## Source Of Truth

- Public docs are authored in `docs/` here; downstream website doc folders are copied render targets.
- `Open-Source Code/` is a sanitized public derivative and must not be assumed to match `grid-core` exactly.
- Program IDs, mint addresses, treasury wallets, and network settings must be verified against current implementation and deployment config before publication.
- README values and roadmap text are advisory narrative, not runtime configuration.
- When website docs need updates, edit here first and let downstream sync scripts copy the content.

## Security Boundaries

- Do not copy private implementation details, sensitive operational material, or security/key-report content from `grid-core` into this public repo.
- Keep public release content intentionally sanitized and review whether any detail belongs in open source before adding it.
- Treat example configs and placeholders cautiously; they may be stale, illustrative, or production-like without being current.
- Do not instruct agents to hand-edit copied docs in web repos as the primary fix path.

## Known Drift

- `grid-terminal` and `grid-core` are only partially mirrored and are not a strict 1:1 pair.
- Mint/program IDs differ across repos and docs; verify instead of copying by sight.
- `grid-interface` syncs docs from this repo via a sibling-repo path, while `grid-admin` still points at a legacy docs path.
- Some files in `Open-Source Code/` match `grid-core`, while others have diverged; always compare before assuming parity.
