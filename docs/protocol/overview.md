---
id: protocol-overview
title: Protocol overview
release: R0
status: specified
canonicalSource: docs/protocol/overview.md
updatedAt: 2026-10-14
implementationRefs: []
limitations: Public specification of the selected product. No program, devnet release, or token described here is live. External systems named below are comparators, not partners.
---

# Protocol overview

> Current Status: public specification; not an active live-economy claim.

Sovereign Swarm is building accountable autonomy on Solana: registered agents, explicit spending policies, and verifiable records of execution.

An economic jurisdiction is an opt-in set of protocol rules for registered agents and the assets placed under those rules. It does not replace public law or confer legal personhood.

Sovereign Swarm does not claim to be a legal system, a sovereign state, an insurer, or a provider of legal personhood. GRID is not the inventor of agent identity, spending limits, or HTTP agent payments. The product hypothesis is a coherent operator workflow that combines bounded authority, evidence, incident handling, and constitutional stewardship. That hypothesis is not a demonstrated moat.

The product has to answer five questions, and each answer has to say whether it is an on-chain control, an operator assertion, a service dependency, or an unimplemented proposal:

1. Which agent acted?
2. Who granted its authority?
3. What could it spend or call?
4. What actually happened?
5. What recovery or dispute process is available?

The first useful release is the foundation of the sequence below, not a permanent reduction of the project to a wallet demo. The marketing site is not the protocol. An operator console is not a public application. An agent framework is not GRID's trust root.

## Comparators

These are primary-source baselines. Overlap is expected. None of these names is a partnership, an endorsement, or a dependency of the relaunch.

| Baseline | Overlap | Selected GRID decision |
|---|---|---|
| Solana Agent Registry | On-chain identity, reputation, and validation registries | Keep a minimal internal controller and key record for GRID's own authorization boundary. An external registry reference is optional discovery metadata. Spending permission is never inferred from an external reputation score. Registration is not sold as unique. |
| Squads spending limits | Token-specific limits, periods, and permitted destinations | Use Squads for protocol custody governance. Bounded delegation is not claimed as novel. Custom agent-vault code has to earn its custody surface with an atomic identity, policy, and receipt contract. |
| x402 on Solana | Typed HTTP payment requirements, signatures, and settlement responses | A future adapter may target the maintained standard. It is not active. No new payment protocol is part of this specification, and GRID transfers are not excused from the token's own fee. |
| Machine Payments Protocol | A distinct HTTP payment model from x402 | Recorded as a future interoperability option and disabled for the launch. It is not the Model Context Protocol, and multi-protocol compatibility is not advertised. |

An external registry outage makes optional discovery information unavailable. It does not change vault authority. No write to an external registry is required for the first release.

## Release sequence

A release is reached only when its evidence exists. These rows are gates, not dates.

| Release | Deliverable | Must work before publication | Deliberately not activated |
|---|---|---|---|
| R0: restoration and canon | One inventory, a fresh deployment registry, archived legacy claims, and scoped incident handling | Source ownership, secret hygiene, reproducible builds, and unresolved facts marked unknown | All old mainnet-readiness claims |
| R1: new public devnet | Connect, register, create a policy, fund a test vault, execute an accepted and a denied action, verify a receipt, and revoke | Real devnet transactions, isolated test assets, negative enforcement tests, and reload, reconnect, and missing-RPC behavior | Trading real assets, insurance, passive returns, paid licenses |
| R2: launch candidate | Token mint and allocation, fee and reserve accounting, vesting, liquidity lock, and an operator rehearsal | Full devnet and mainnet simulation, release gates, sealed mainnet inputs, and a website that is truthful on every route | Any function that depends on unreleased governance, oracle, bridge, or custody promises |
| R3: public mainnet token and controlled protocol | Fixed-supply GRID with transparent allocations, and registry, receipt, and bounded policy-vault use only where reviewed | Fresh mint, revoked authorities as specified, liquidity-lock proof, economic reconciliation, and website chain status | Global transfer policing, return promises, automated slashing, and unstated delegation to agent runtimes |
| R4: governance and bonded participation | Tested lock, vote, propose, timelock, and execute; explicit opt-in agent bonds; a third-party verifier pilot | Governance and custody review, stake and withdraw fee behavior, and specified conflicts and appeals | Automatic insurance liability, equity-like redemption, treasury betting |
| R5: service economy | Runtime adapters, a tool authorization API, stable-asset payments, bounded work escrow, and verifier accounting | Payment replay and settlement tests, cost disclosures, dispute boundaries, and a runtime conformance suite | Automatic execution of arbitrary remote tool schemas |
| R6: funded liability pilot | A narrow contractual compensation experiment with real reserves and objective triggers | Counsel, economics, reserve sufficiency, independent oracle review, outage and correlated-loss tests, and a consent and appeal path | Broad insurance or full indemnity promises |
| R7: mature economic jurisdiction | Wider liability arrangements, a constitutional dispute system, privacy-preserving attestations, a decentralized verifier network, and shared knowledge | A ratified spec, independent validation, and measured demand for every module | Marketing a research idea as existing infrastructure |

R1 and R2 are not satisfied by a screenshot or an in-memory demo. R3 is not the end of the long-term thesis. R4 through R7 stay public with their dependencies, and they stay inactive until those dependencies exist.

### R1 personas

**Operator.** A developer or team grants a software agent limited authority over test assets. The operator chooses one of two literal presets: `Read only`, which grants no spending authority, or `Devnet transfer demonstration`, which names one test mint, one destination, a per-transfer maximum, a daily cap, an expiry, and a revocation action. No agent signing identity receives unrestricted treasury authority.

**Agent.** A separate signing identity presents a bounded request. Chain verification and vault authority decide whether assets move. A failed policy evaluation returns a structured reason. A receipt for that failure is not presented as a successful transaction.

**Verifier.** A visitor can open a shareable receipt and check the network, agent, policy digest, outcome, transaction reference, observation time, and confirmation status from the signed public fields. A logged request without confirmed settlement is `Not settled`.

**Steward.** An authenticated operator can inspect deployments and incidents, trigger a scoped pause where the contract permits it, and prepare a timelocked change. Connecting a wallet does not grant steward access. Role names do not create signing authority.

## Selected public copy

This is the copy for the public site. It is specified, not yet the live homepage.

**Hero eyebrow:** SOVEREIGN SWARM / SOLANA

**Hero heading:** Autonomy with accountability.

**Hero paragraph:** Give software agents explicit authority, enforce limits on the assets you delegate, and verify what happened. GRID connects agent identity, policy-controlled execution, and a durable record of each action.

**Pre-verification notice:** The new devnet is being prepared. Explore the protocol design and current implementation status.

**Protocol section heading:** Five commitments. Verifiable controls.

**Protocol section paragraph:** The Sovereign Constitution sets the project's commitments. The protocol turns specific commitments into permissions, spending limits, revocation, and evidence. Each capability states what it enforces and what remains an operator responsibility.

**Register an agent.** Link an agent key to its operator, declared capabilities, and current registration status.

**Delegate within limits.** Place assets in a dedicated vault and define what the agent may do with them. Revoke delegated access when it is no longer needed.

**Verify the record.** Inspect signed receipts, policy versions, and settlement references without relying on a screenshot or an agent's claim of success.

**Long-term heading:** A foundation for an accountable agent economy.

**Long-term paragraph:** The roadmap extends from protected execution to bonded participation, community governance, independent verification, and carefully scoped liability arrangements. These modules activate only when their contracts, funding, and operating terms are ready.

**Token page introduction:** GRID is the protocol's fixed-supply token. The relaunch design assigns it a role in protocol governance and opt-in bonding as those modules become available. Token ownership does not grant company equity, a promised income, insurance coverage, or a claim on treasury assets.

**Scope notice:** These rules control this vault. They do not control assets held elsewhere or actions performed outside the protocol.

**Receipt missing-data notice:** We cannot verify settlement from the current data. No successful execution is claimed.

**Inactive integration:** The MoltHub bridge is a historical integration specification. It is not required for GRID and is not active in the relaunch.

Use `registered`, `attested`, `revoked`, `active policy`, `confirmed`, and `finalized` only with their schema-defined meanings. Do not use wallet balance as a grade such as citizen, institutional, insured, trusted, or constitutional.

## Module boundaries

Each module below is part of the thesis. None of them is active in R0.

- **Identity.** Controller-owned registration, key rotation, status, a signed manifest reference, and optional issuer attestations. An NFT balance is not authorization.
- **Policy.** Capabilities over dedicated assets and accounts, explicit expiry and nonces, one authoritative state transition, revocation, and spend accounting. An arbitrary instruction relay is not a policy engine.
- **Evidence.** Immutable identifiers, canonical serialization, an agent signature, the operator-granted policy digest, and verified transaction status. Public content is redacted. Private details stay private.
- **Bonding.** Optional opt-in escrow that states what could be penalized and under which proof and appeal rules. Before those rules exist, a bond is a non-slashable time lock. Stake is not insurance.
- **Governance.** Votes may govern mutable operational parameters and allowed upgrade paths. Immutable mint properties cannot be changed by a vote. A role title does not confer a key.
- **Guardian network.** Independent verification and retrieval, not Solana consensus and not another chain. Pilot registration is free. There is no emissions promise.
- **Liability.** A volatile token cannot promise stable-value compensation. Real coverage needs separately funded reserves, terms, and loss limits.
- **Knowledge.** Private or explicitly shared records with provenance. A signature does not make content true, and interactions are not broadcast by default.
- **Industrial workflow.** Parallel work reserves against one shared budget so concurrent shards cannot each spend the full cap.
- **Adapters.** One generic interface first. Names of agent runtimes denote tested integrations only, never endorsements.

The [constitution](constitution.md) states the five laws and the limit of each program guarantee. The [documentation index](../README.md) lists what is published.
