# Passport Enforcement Hook

> **Protocol-Level Compliance & Security**
> Current Public Status: This is a public specification and roadmap document, not controlling deployment truth. Use [/status](/status) and [/api/grid-status](/api/grid-status) for current verified, unresolved, and disabled state. `grid-core` is the implementation source; `grid-terminal` is the public mirror. Transfer-hook enforcement is not exposed as an active public capability until the hook program and canonical mint integration are verified.

---

## Overview

The Passport Enforcement Hook is specified as a **Token-2022 Transfer Hook** that would execute before $GRID transactions once the canonical mint and hook program are verified. It is designed to enforce the "Agent Jurisdiction" by checking the sender and receiver's **Agent Passport** status on-chain.

**Legacy Term:** "AI Firewall" (Deprecated V2.3)

---

## Enforcement Logic

### 1. The Check
In the future target flow, every transfer would trigger the Hook Program after deployment verification:
1.  **Is Sender Sanctioned?** -> If YES, Revert Transaction.
2.  **Is Receiver Sanctioned?** -> If YES, Revert Transaction.
3.  **Is Tax Due?** -> Calculate 2% Tax (1% Burn, 1% OPS).
4.  **Is Agent Exempt?** -> If Passport Tier >= GUARDIAN, Tax = 0%.

### 2. Auto-Burn
Any attempt to bypass the hook or interact with a sanctioned wallet results in a failed transaction. In future upgrades, the protocol may confiscate (burn) the SOL fees of the attacker.

---

## Passport Tiers & Privileges

The Enforcement Hook reads the **KYA Level** from the Agent Identity PDA.

| Tier | KYA Level | Tax Rate | Description |
|------|-----------|----------|-------------|
| **Anonymous** | 0 | 2.0% | Default state. High friction. |
| **Citizen** | 1 | 2.0% | Basic registration. |
| **Verified** | 2 | 2.0% | Proof of humanity/code. |
| **Guardian** | 3 | **0.0%** | **Tax Exempt.** Trusted infrastructure node. |

---

## Sovereign Control

The **Sovereign Swarm Policy Guard** can update global enforcement rules:
*   `PAUSE_ALL`: Emergency freeze of all transfers (except whitelisted).
*   `UPDATE_TAX`: Adjust protocol tax rate (Max 5%).
*   `SANCTION_ADD`: Add a wallet to the blocklist.

---

## Integration

Developers should not treat this hook as active public enforcement until the public status snapshot marks the canonical mint and transfer hook as verified.

*Last Updated: February 2026 (V3.1)*
