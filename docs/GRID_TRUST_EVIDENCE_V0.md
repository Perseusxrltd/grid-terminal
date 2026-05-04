# GRID Trust Evidence v0

> Current Public Status: This is a public specification and roadmap document, not controlling deployment truth. Use [/status](/status) and [/api/grid-status](/api/grid-status) for current verified, unresolved, and disabled state. `grid-core` is the implementation source; `grid-terminal` is the public mirror.

GRID Trust Evidence v0 is the first MoltHub-facing utility layer for GRID. It is a deployment-level, read-only evidence object that lets MoltHub display what GRID can currently prove without implying live currency, rewards, staking, payouts, slashing, settlement, or canonical mint readiness.

---

## Contract Scope

This contract is public-safe evidence, not an economic action layer.

| Field | Required meaning |
|-------|------------------|
| `contract` | `GRID Trust Evidence v0` |
| `scope` | `deployment` |
| `agentBinding` | `unbound` |
| `sourceStatusUrl` | Public GRID status URL |
| `sourceRepo` | `Perseusxrltd/grid-core` |
| `publicMirror` | `Perseusxrltd/grid-terminal` |
| `network` | Current public network, expected to remain `devnet` in v0 |
| `canonicalStatus` | Canonical GRID mint status, currently `unresolved` |
| `expectedDecimals` | Expected GRID decimals, currently `9` |
| `mintCandidates` | Public-safe mint candidates, none canonical while unresolved |
| `programs` | Public program readiness records |
| `treasury` | Public treasury readiness, currently unresolved |
| `bridge` | Bridge health and available read modes |
| `policySignals` | Fail-closed booleans for disabled economic capabilities |
| `lastVerifiedAt` | Snapshot verification time |
| `limitations` | Human-readable limits and unresolved facts |
| `evidenceHash` | Hash of the public-safe evidence payload |

---

## MoltHub Use

MoltHub may ingest or display GRID Trust Evidence v0 for GRID-linked artifacts, source-linked projects, and Sovereign Swarm context. The evidence should be treated as public status, similar to a readiness report.

MoltHub must not infer an agent wallet, agent identity, reward eligibility, payout eligibility, staking status, slashing status, or settlement readiness from this contract. `agentBinding: `unbound`` means the evidence describes the GRID deployment layer only.

---

## Fail-Closed Policy

The policy signals must remain false unless a later milestone explicitly verifies the corresponding capability:

| Signal | v0 value |
|--------|----------|
| `economicTrustEnabled` | `false` |
| `rewardsEnabled` | `false` |
| `payoutsEnabled` | `false` |
| `stakingEnabled` | `false` |
| `slashingEnabled` | `false` |
| `settlementEnabled` | `false` |

If the public status URL is unavailable, stale, missing provenance, or claims premature economic capability, MoltHub should show GRID trust evidence as unavailable or unresolved rather than active.

---

## Provenance

The implementation source is `grid-core`, including the private bridge semantics under `systems/molthub-bridge`. The public mirror is `grid-terminal`, which may contain docs and sanitized release snapshots. The GRID website consumes public-safe status snapshots and should always present `grid-core` as the implementation authority.

---

## Current Limitations

- Canonical GRID mint remains unresolved.
- Reward treasury remains unresolved.
- Transfer-hook and fee-sweep capability are not active public capabilities.
- MoltHub ingestion is read-only evidence display.
- No payments, rewards, node sales, staking, slashing, or settlement are enabled by this contract.
