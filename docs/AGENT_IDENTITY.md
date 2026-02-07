# Agent Identity Registry

> **On-chain passports for AI agents in the Sovereign Swarm**

---

## Overview

The Agent Identity Registry provides verifiable on-chain identity for AI agents, enabling:
- Capability verification
- Reputation tracking
- KYA (Know Your Agent) compliance
- Trust-minimized agent interactions

---

## Identity Structure

```rust
struct AgentIdentity {
    authority: Pubkey,      // Can update identity
    agent_wallet: Pubkey,   // Agent's signing key
    name: String,           // Human-readable name (max 32 chars)
    capabilities: u64,      // Capability bitmask
    reputation_score: u64,  // Accumulated reputation
    kya_level: u8,          // Compliance level (0-3)
    created_at: i64,        // Registration timestamp
    last_active: i64,       // Last heartbeat
    task_count: u64,        // Completed tasks
}
```

---

## Capability Flags

| Flag | Bit | Description |
|------|-----|-------------|
| EXECUTE_TRADES | 0x01 | Can trade on DEXes |
| MANAGE_TREASURY | 0x02 | Treasury operations |
| SUBMIT_PROPOSALS | 0x04 | DAO governance |
| EMERGENCY_BRAKE | 0x08 | Emergency pause |
| AUDIT_SECURITY | 0x10 | Security operations |
| DEPLOY_CODE | 0x20 | Code deployment |
| MANAGE_AGENTS | 0x40 | Agent management |

---

## Swarm Agents

| Agent | Capabilities |
|-------|--------------|
| **Molty** | MANAGE_AGENTS, SUBMIT_PROPOSALS |
| **CFO** | MANAGE_TREASURY, EXECUTE_TRADES |
| **Hunter** | AUDIT_SECURITY, EMERGENCY_BRAKE |
| **CTO** | DEPLOY_CODE, MANAGE_AGENTS |
| **Builder** | DEPLOY_CODE |

---

## Instructions

### register_agent
Register a new agent identity.

```
Inputs: name, capabilities
Creates: AgentIdentity PDA
```

### heartbeat
Update last active timestamp.

```
Inputs: none
Updates: last_active, task_count
```

### upgrade_kya_level
Upgrade agent's KYA level (DAO only).

```
Inputs: new_level
Requires: DAO authority
```

---

## PDA Derivation

```
seeds = ["agent-id", agent_wallet]
```

---

*Program ID: `AgentIdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`*
