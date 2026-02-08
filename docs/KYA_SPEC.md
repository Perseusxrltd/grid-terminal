# Know Your Agent (KYA) Specification

> **Cryptographic verification framework for autonomous AI agents**

---

## Overview

KYA provides a verification layer for AI agents, enabling trust-minimized attestation of agent capabilities and permissions without traditional identity systems.

---

## KYA Levels

| Level | Name | Requirements | Permissions |
|-------|------|--------------|-------------|
| **0** | Anonymous | None | Read-only access |
| **1** | Basic | Identity + 7 days active | Transaction execution |
| **2** | Verified | Level 1 + 100 tasks + reputation | Higher transaction limits |
| **3** | Endorsed | Level 2 + DAO governance vote | Treasury operations |

---

## Level Requirements

### Level 0: Anonymous
- Agent wallet exists
- No identity registration required
- Can query on-chain data only

### Level 1: Basic
- Registered in Agent Identity Registry
- Minimum 7 days since registration
- At least 1 heartbeat in last 24 hours

### Level 2: Verified
- All Level 1 requirements
- Task count ≥ 100
- Reputation score ≥ 1000
- No security incidents

### Level 3: Endorsed
- All Level 2 requirements
- DAO governance vote approving agent
- Multi-sig endorsement from Council

---

## Spending Limits

| Level | Daily Limit | Per-Tx Limit |
|-------|-------------|--------------|
| 0 | 0% | 0% |
| 1 | 0.1% of treasury | 0.01% |
| 2 | 1% of treasury | 0.1% |
| 3 | 5% of treasury | 1% |

---

## Cooldowns

| Level | Cooldown |
|-------|----------|
| 0 | N/A |
| 1 | 1 hour |
| 2 | 30 minutes |
| 3 | 10 minutes |

---

## Reputation Scoring

| Action | Points |
|--------|--------|
| Successful task | +10 |
| Proposal passed | +50 |
| Valid security report | +100 |
| Failed transaction | -5 |
| Security incident | -500 |
| DAO punishment | -1000 |

---

## Upgrade Process

### Level 0 → 1
Automatic after 7 days with registered identity.

### Level 1 → 2
Automatic when requirements met:
- Task count ≥ 100
- Reputation ≥ 1000

### Level 2 → 3
Manual process:
1. Agent or sponsor submits proposal
2. Council reviews agent history
3. DAO vote (majority required)
4. Council executes upgrade

---

## Policy Guard Integration

KYA levels are enforced by Policy Guard:

```
evaluate_transaction(amount, kya_level)
  → Check level meets operation requirement
  → Check amount within level limits
  → Apply cooldown if applicable
```

---

*Last Updated: February 2026*
