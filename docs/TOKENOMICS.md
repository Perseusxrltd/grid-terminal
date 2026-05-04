# Tokenomics v3.1 - Fair Launch & Risk Collateral

> **Current Public Status:** This is a public specification and roadmap document, not controlling deployment truth. Use [/status](/status) and [/api/grid-status](/api/grid-status) for current verified, unresolved, and disabled state. `grid-core` is the implementation source; `grid-terminal` is the public mirror.
> **Target Principle:** Fair-launch tokenomics remain a staged design until canonical mint, treasury, liquidity, and launch readiness are verified upstream.

---

## Token Specifications

| Parameter | Value |
|-----------|-------|
| **Name** | $GRID |
| **Standard** | Solana Token-2022 |
| **Decimals** | 9 |
| **Total Supply** | 1,073,741,824 (2³⁰) |
| **Transfer Fee** | Staged target: 2.0% (1.0% Burn / 1.0% Ops) |
| **Mint Status** | Multiple verified devnet candidates exist; no canonical mint is selected in the public snapshot. |

---

## Allocation

| Allocation | Amount | % | Vesting |
|------------|--------|---|---------|
| **Liquidity Pool** | 590,558,003 | 55% | 🔒 Locked 12 months (Streamflow) |
| **Treasury (DAO)** | 214,748,365 | 20% | Governed by veGRID |
| **Ecosystem Fund** | 161,061,274 | 15% | Grants / Milestone-based |
| **Founder** | 80,530,636 | 7.5% | 0% TGE, 6mo cliff + 18mo linear |
| **Team & Advisors** | 26,843,546 | 2.5% | 6mo cliff + 18mo linear |

> **Staged allocation model:** This table is a target allocation model, not evidence of a live launch, active treasury, or circulating canonical supply.

---

## Fair Launch Principles

### No Presale
- Target: zero private investor rounds
- Target: no discounted pre-TGE sales
- Target: equal entry point for all participants after readiness is verified

### Anti-Snipe Protection
- **50% Genesis Tax** at launch, if the launch configuration is approved
- Exponential decay (λ=0.05)
- Reaches base 2% at ~150 blocks
- MEV-protected via Jito bundles

### Governance Lockout
- Founder & Team cannot vote for 12 months
- Prevents governance capture
- Community-first decision making

---

## Vesting Enforcement

Vesting is intended to be enforced on-chain via **Streamflow.finance** smart contracts after launch readiness is verified.

### Founder Schedule
```
Months 0-6:   ████████████████████ CLIFF (0% unlocked)
Months 6-24:  ░░░░░░░░░░░░░░░░░░░░ Linear unlock
Month 24:     ████████████████████ Fully vested
```

### Team Schedule
```
Months 0-6:   ████████████████████ CLIFF (0% unlocked)
Months 6-24:  ░░░░░░░░░░░░░░░░░░░░ Linear unlock
Month 24:     ████████████████████ Fully vested
```

---

## Future Transfer Fee Mechanism

| Fee Component | Rate | Destination |
|---------------|------|-------------|
| Burn | 1.0% | Sent to dead address (deflationary) |
| Operations | 1.0% | Treasury for ongoing operations |

### Agent Exemption
Whitelisted agent contracts are expected to pay **0% fee** in the future active system to enable:
- Micro-payments between agents
- High-frequency treasury operations
- x402 payment protocol transactions

---

## Liquidity

- Target: **55%** of supply in LP
- Target: **100%** of LP tokens locked 12 months
- Target lock contract: Streamflow
- Verification links published only after TGE readiness is verified

---

## veGRID Governance

$GRID holders are expected to be able to lock tokens to receive **veGRID** (vote-escrowed GRID) after staking and treasury readiness are verified:

| Lock Duration | veGRID Multiplier | Tier |
|---------------|-------------------|------|
| 3 months | 0.25x | Voter |
| 6 months | 0.50x | Delegate |
| 12 months | 1.0x | Senator |
| 24 months | 2.0x | Sovereign |

**Benefits:**
- Future fee participation from verified protocol revenue
- Voting power on governance proposals after governance readiness
- Higher tiers may unlock betting pools and constitutional votes in later milestones

See [veGRID Specification](VEGRID_SPEC.md) for details.

---

## V3.1: $GRID as Risk Collateral

In the V3.1 target design, $GRID is not just a governance and utility token; it is specified as **Risk Capital**.

| Use Case | Mechanism | Amount |
|----------|-----------|--------|
| **KYA Tier Bonding** | Stake $GRID to upgrade Agent Passport tier | 1,000 - 100,000 $GRID |
| **Insurance First-Loss** | Locked in Liability Vaults; slashed on fault | Variable |
| **Arbitration Deposit** | Filing fee for disputes (refunded if successful) | 500 $GRID |
| **Transfer Hook Basis** | Passport status gates $GRID transfers | N/A (protocol-level) |

This target model creates a **demand flywheel** after launch readiness: agents need $GRID to operate → staking reduces supply → violations burn supply → deflationary pressure.

See [INSURANCE_SPEC.md](INSURANCE_SPEC.md) and [KYA_SPEC.md](KYA_SPEC.md) for details.

---

*Last Updated: February 2026 (V3.1)*
