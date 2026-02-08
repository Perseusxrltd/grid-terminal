# veGRID Governance Specification

> **Tiered vote-escrow system for $GRID holder governance**

---

## Overview

veGRID (vote-escrowed GRID) is a non-transferable governance token obtained by locking $GRID for a specified duration. Longer locks yield more voting power.

---

## Lock Tiers

| Lock Duration | veGRID Multiplier | Tier Name | Powers |
|---------------|-------------------|-----------|--------|
| 1 week | 0.01x | Observer | Fee share only |
| 3 months | 0.25x | Voter | Betting pools |
| 6 months | 0.50x | Delegate | Grants, agent whitelisting |
| 12 months | 1.0x | Senator | Protocol params, treasury |
| 24 months | 2.0x | Sovereign | Tokenomics, protocol upgrades |

---

## veGRID Calculation

```
veGRID = GRID_locked × lock_multiplier × (time_remaining / max_lock_time)
```

**Properties:**
- **Non-transferable**: Cannot be sold or moved
- **Linear decay**: Power decreases as lock expires
- **Re-lockable**: Extend lock to restore/increase power
- **Early unlock**: 50% penalty (forfeited to treasury)

---

## Governance Powers by Tier

### Tier 0: Observer
- Receive proportional fee share (0.5x multiplier)
- Read-only governance forum access

### Tier 1: Voter
- Vote on community betting pools
- Receive betting gains (proportional)
- 0.75x fee share multiplier

### Tier 2: Delegate
- All Tier 1 powers
- Vote on ecosystem grants
- Vote on agent whitelisting
- Can delegate votes to others
- 1.0x fee share multiplier

### Tier 3: Senator
- All Tier 2 powers
- Vote on protocol parameters
- Vote on treasury allocations
- Submit governance proposals
- 1.25x fee share multiplier

### Tier 4: Sovereign
- All Tier 3 powers
- Vote on tokenomics changes (within constitutional bounds)
- Vote on protocol upgrades (non-constitutional)
- Veto power (requires 10% of total veGRID)
- 2.0x fee share multiplier

---

## Community Betting Pools

veGRID holders (Tier 1+) can vote to allocate treasury funds to prediction markets.

### Process
1. **Proposal**: Betting proposal submitted (max 5% treasury)
2. **Vote**: 7-day voting window, 20% quorum
3. **Execution**: Coordinator places bet via Polymarket/Drift
4. **Settlement**: Gains/losses distributed

### Distribution
| Outcome | Voters | Treasury | Dev/Ops |
|---------|--------|----------|---------|
| Win | 70% | 20% | 10% |
| Loss | 100% | 0% | 0% |

### Safeguards
- Max 5% treasury per bet
- 7-day cooldown between bets
- Hunter agent can emergency halt

---

## High-Level Governance

### Thresholds

| Action | Required Tier | Threshold | Timelock |
|--------|--------------|-----------|----------|
| Grant approval | Delegate | 51% | 72h |
| Protocol param | Senator | 51% | 72h |
| Fee change (±0.5%) | Senator | 51% | 7d |
| Fee change (>0.5%) | Sovereign | 66% | 14d |
| Burn rate change | Sovereign | 66% | 14d |
| Tokenomics change | Sovereign | 75% | 30d |

> ⚠️ **Constitutional Exclusion**: The 5 Immutable Laws cannot be modified by governance. See [CONSTITUTION.md](CONSTITUTION.md) for exclusions.

### Exit Rights
- **Ragequit**: Any holder can exit with pro-rata treasury share
- **Emergency pause**: 10% Senator+ veGRID can trigger

---

## Fee Distribution

### Sources
- 1% transfer fee (ops portion)
- Betting pool gains
- Agent subscription revenue

### Formula
```
user_share = (user_veGRID / total_veGRID) × tier_multiplier × fee_pool
```

---

## Contract Architecture (Planned)

1. **veGRID Locker** - Lock GRID, calculate decaying veGRID
2. **Governance Hub** - Proposal creation, voting, execution
3. **Betting Pool** - Treasury allocation, oracle integration
4. **Fee Distributor** - Proportional fee claims

---

*Last Updated: February 2026*
