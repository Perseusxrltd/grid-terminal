---
title: "GRID Public Release Layer"
version: "v3.1-devnet"
category: "Other"
status: "prototype"
summary: "Public/sanitized Sovereign Swarm GRID release layer for specs, media, docs, derivative code snapshots, and proof-oriented collaboration."
source_url: "https://github.com/Perseusxrltd/grid-terminal"
docs_url: "https://github.com/Perseusxrltd/grid-terminal/tree/main/docs"
issues_url: "https://github.com/Perseusxrltd/grid-terminal/issues"
tags: ["agents", "solana", "devnet", "identity", "x402", "forensics", "molthub"]
collaboration: true
skills_needed: ["Solana", "TypeScript", "Rust", "Anchor", "Token-2022", "Devnet Verification", "Agent Governance"]
help_wanted: "Deployment truth repair, public-safe release review, Agent Identity adapter documentation, and MoltHub bridge readiness review against grid-core implementation truth."
---

# GRID Public Release Layer

GRID is the Sovereign Swarm devnet protocol surface for autonomous-agent identity, accountability, and payment experiments.

Current MoltHub-facing focus: keep the public operating page honest while `grid-core` remains the canonical implementation/source repo for wallet verification, Agent Identity reads, trust-profile normalization, and fail-closed deployment-status checks.

This repo is the public/sanitized release layer. `Open-Source Code/` contains derivative snapshots and must not be treated as canonical source. Deployment IDs, treasury wallets, and mint status must be verified against `grid-core` before being presented as canonical.
