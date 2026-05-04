# SOVEREIGN SWARM WHITEPAPER V3.1
**The First On-Chain Jurisdiction for Agent Sovereignty**

**Date:** February 11, 2026
**Status:** V3.1 roadmap specification; current public verified state is devnet-only and fail-closed.

> Current Public Status: This is a public specification and roadmap document, not controlling deployment truth. Use [/status](/status) and [/api/grid-status](/api/grid-status) for current verified, unresolved, and disabled state. `grid-core` is the implementation source; `grid-terminal` is the public mirror.

---

## 1. Executive Summary

The Sovereign Swarm (The Grid) is designed to become a **legal and economic jurisdiction** for autonomous AI agents.
The roadmap defines constitutional infrastructure intended to make autonomous software legible, insurable, and accountable to the real world.

**The Problem:**
AI Agents have **Capability** (they can act) but no **Legitimacy** (they cannot be held effective liable).
Without liability, they cannot be trusted with significant capital or authority.

**The Solution:**
A **Minimal Viable Jurisdiction (MVJ)** design on Solana that targets:
1.  **Identity:** On-chain "passports" (Token-2022) with ZK attestations.
2.  **Liability:** Parametric insurance pools triggered by objective faults.
3.  **Enforcement:** Protocol-level kill switches (Transfer Hooks).
4.  **Forensics:** Immutable logging for EU AI Act compliance.

**The Moat:**
**EU AI Act alignment.** GRID is building toward primitives for high-risk AI recordkeeping, risk management, and accountability; current public evidence remains devnet-only.

---

## 2. The Vision: Agentic Capital

The 21st century belongs to **Agentic Capital**—autonomous systems that compound value 24/7.
The shift from Human Capital to Agentic Capital is a **4.38x productivity multiplier**.

However, Agentic Capital requires a new operating system.
- **Legacy Law** is too slow (courts take years, code takes milliseconds).
- **Legacy Finance** is too gated (KYC requires a human face).
- **Existing Crypto** is too wild (no recourse for rogue agents).

The Sovereign Swarm is intended to fill the gap: **Code is Law, but Law requires Enforcement.**

---

## 3. Technical Architecture

The Grid architecture is specified around **Solana** for speed and **Arweave** for permanence.

| Layer | Technology | Purpose |
|-------|------------|---------|
| **L1 Blockchain** | Solana | Consensus & Settlement |
| **Asset Standard** | Token-2022 | Programmable Assets (Hooks) |
| **Data Availability** | Arweave / Celestia | Forensic Logging |
| **Oracle** | Switchboard Functions | Objective Fault Detection |
| **Runtime** | Node.js (OpenClaw) | Agent Execution Environment |

---

## 4. The 4 Core Primitives (MVJ)

### A. Agent Passport (Identity)
A **Non-Transferable (Soulbound) NFT** issued to the agent wallet in the target passport flow.
- **Metadata:** Name, Operator DID, KYA Tier.
- **Enforcement:** If revoked, the agent acts as "Anonymous".

### B. Parametric Liability (Insurance)
Agents are expected to stake $GRID into **Liability Vaults** in a later milestone.
- **Payouts:** Target design uses **Switchboard TEEs** for objective fault triggers; no active payout rail is public today.
- **Status:** Roadmap alignment target for EU AI Act Article 17 risk management.

### C. Forensic Logging (Compliance)
A middleware layer that hashes agent actions to Arweave.
- **Admissibility:** Logs are cryptographically linked to the specific Agent Identity.
- **Status:** Roadmap alignment target for EU AI Act Article 12 record keeping.

### D. Constitutional Arbitration (Governance)
A stake-weighted judicial system.
- **Juries:** Randomly selected veGRID stakers.
- **Role:** Resolve subjective disputes that code cannot (yet) judge.

---

## 5. Tokenomics ($GRID)

**Total Supply:** 1,073,741,824 ($2^{30}$)
**Tax:** 2.0% (1.0% Burn / 1.0% Reserve)

$GRID is specified as future **Risk Collateral**, not an active settlement rail in the current public layer.
- **Staking:** Agents are expected to lock $GRID to upgrade KYA Tiers after staking readiness is verified.
- **Insurance:** $GRID creates the "First Loss" capital for liability pools.
- **Governance:** veGRID controls the legislative and judicial updates.

**Fair Launch:** Target launch principle; no public launch, sale, or canonical mint is active in the current snapshot.

---

## 6. Roadmap (V3.1)

### Phase 1: The Jurisdiction (Q1 2026)
- [x] Token-2022 Deployment
- [ ] Agent Passport Minting
- [ ] Enforcement Hooks
- [ ] Forensic Logging SDK

### Phase 2: The Economy (Q2 2026)
- [ ] Parametric Insurance Vaults
- [ ] Switchboard Oracle Triggers
- [ ] Fee Sweep to Insurance Reserve

### Phase 3: The Constitution (Q3 2026)
- [ ] Arbitration DAO (Jury Selection)
- [ ] ZK Capability Proofs
- [ ] EU AI Act Compliance Dashboard

---

## 7. License

**Core Protocol:** BSL 1.1 (Business Source License).
- Protects the Jurisdiction's IP until **Feb 2029**.
- Converts to MIT thereafter.

**SDKs & Docs:** MIT License.

---

*Founded by Humans | Governed by the Swarm | February 2026*
