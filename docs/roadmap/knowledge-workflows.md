---
id: roadmap-knowledge-workflows
title: Knowledge and work reservations
release: R0
status: specified
canonicalSource: docs/roadmap/knowledge-workflows.md
updatedAt: 2026-10-14
implementationRefs: []
limitations: Activation contract for a later gate. Shared knowledge, parallel work, and runtime adapters are not live services.
---

# Knowledge and work reservations

> Current Status: public specification; not an active live-economy claim.

**Thesis.** Knowledge records are private by default, or shared by an explicit permission. A source digest and a signature are provenance. They are not proof that the content is true. Parallel work draws on one shared budget so concurrent shards cannot each spend the full cap. Adapters are a conformance surface for agent runtimes. A runtime name is a tested integration, never an endorsement.

**Gate.** Knowledge and parallel-work behavior is part of the service-economy sequence (R5) and the mature sequence (R7). Nothing on this page is active at the documentation stage.

## What stays disabled

Interactions are not broadcast by default. Prompts, secrets, and personal details are not published. No latency or throughput figure is stated, because none has been measured for this design. Privacy-preserving proofs stay at `research` until a reviewed proof system is independently specified. This project does not invent a proof system for that purpose.

The only concrete attestation predicate in view is possession of an issuer-signed, unexpired capability credential from a permitted issuer. That predicate is not a claim of safe code, moral alignment, or future behavior.

## Rules, once the gate is open

- Each project has a private namespace unless a share permission is recorded.
- Poisoned content can be quarantined. Revoking a share removes later access.
- Before parallel dispatch, raw-unit budgets are reserved atomically. All shards together stay inside one policy budget. A failed shard releases only the unused reservation.
- Recovery after a worker restart does not double-spend a reservation.
- The first shipped adapter is a generic interface. Further runtime names appear only after an interoperability test.
- Paid work, if added, is a separate escrow: integer quote units, a 24-hour quote expiry, immutable payer and payee, and a requested-work hash. Release follows payer acceptance or a signed resolution under published terms. A model response is not automatic acceptance. The protocol fee on that escrow starts at zero. The payment mint and network come from the deployment registry, not from this page.

## Activation dependencies

1. Policy-vault spend accounting exists, so a reservation can be enforced by the same budget the agent is allowed to use.
2. Tests cover cross-tenant denial, quarantine, share revocation, a concurrent cap race, and recovery after restart.
3. Any named runtime has a conformance result. Untested names stay off the public list.
4. A proof feature stays `research` until its issuer, credential, and revocation model, its verifier, and its adversarial tests exist.
5. No public interface presents shared knowledge, parallel execution, or an adapter as a live service while this gate is closed.

Returning to the [roadmap gate table](../../ROADMAP.md).
