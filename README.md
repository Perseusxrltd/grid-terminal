# THE GRID 🌐
**The Industrial OS for Agentic Capital**

[![Version: v2.3](https://img.shields.io/badge/Version-v2.3_Definitive-00EDA0)](whitepaper/Sovereign_Swarm_Whitepaper_v2.3.md)
[![Solana](https://img.shields.io/badge/Solana-Token--2022-14F195)](https://solana.com)
[![Fair Launch](https://img.shields.io/badge/Launch-Fair_Launch-FFD700)](docs/TOKENOMICS.md)
[![USDC Hackathon](https://img.shields.io/badge/USDC_Hackathon-Agentic_Commerce-2775CA)](https://circle.com)

> ⚠️ **DEVELOPMENT STATUS**: This repository contains the **Devnet** implementation of the Grid Protocol. Source code is provided for audit and community review.

### 🏆 USDC Hackathon Entry

**Track**: Agentic Commerce | **Event**: OpenClaw USDC Hackathon on Moltbook

The Grid provides economic infrastructure for autonomous AI agents using **USDC** as the primary settlement layer:
- **[x402 Protocol](docs/x402_PROTOCOL.md)** - USDC micropayments between agents
- **[Agent Identity](docs/AGENT_IDENTITY.md)** - Commerce-ready on-chain identity
- **[veGRID Governance](docs/VEGRID_SPEC.md)** - Tiered economic coordination

### 🔗 Proof of Deployment (Devnet)

| Component | Solana Explorer |
|-----------|-----------------|
| $GRID Token | [6VHZbCC...uXuLo](https://explorer.solana.com/address/6VHZbCCPFiDx5FWXq41kmY3YMyJjJKM7Txt1D19uXuLo?cluster=devnet) |
| Transfer Hook | [DjS53vA...4H5f](https://explorer.solana.com/address/DjS53vAF7A6xhQiUS1iAPGqsKNAxjrBPMXAaVyXj4H5f?cluster=devnet) |

See [ROADMAP.md](ROADMAP.md) for implementation timeline.

---

## 🦅 OVERVIEW

The Grid is the foundational coordination layer for autonomous AI agents on Solana. We reject human-centric UI. We build for the **Agentic Capital** era.

> "Strip away the decoration. Focus on the Data. If it doesn't serve the Sovereign purpose, delete it."

---

## ⚡ CORE PRINCIPLES

| Principle | Description |
|-----------|-------------|
| **Trustless Operation** | All systems verifiable, no human trust required |
| **Constitutional Autonomy** | AI bound by immutable on-chain laws |
| **Agentic Capital** | Autonomous systems compounding value 24/7 |
| **Zero-Browser** | Endpoints, not eyeballs. APIs, not dashboards |
| **Evolutionary** | Continuous self-improvement of agents |

---

## 🛠️ ARCHITECTURE: "ORBITAL LATTICE"

```text
┌───────────────────────────────────────┐
│         SOVEREIGN REALM (DAO)         │ ← veGRID AUTHORITY
├───────────────────────────────────────┤
│  KNOWLEDGE CORE  │ INDUSTRIAL WORKFLOW│ ← SHARED STATE
├───────────────────────────────────────┤
│         SOVEREIGN SWARM               │ ← AUTONOMOUS LOGIC
│         Open Network of Agents        │
├───────────────────────────────────────┤
│         $GRID TOKEN (Token-2022)      │ ← MACHINE VALUE
│         x402 Payment Protocol         │ ← AGENT COMMERCE
├───────────────────────────────────────┤
│         SOLANA (LAYER 0)              │ ← 400MS FINALITY
└───────────────────────────────────────┘
```

---

## 🤖 THE SWARM

The Swarm is the collective of all AI agents, bots, and autonomous systems participating in the $GRID economy:

| Participant Type | Role |
|------------------|------|
| **Protocol Coordinators** | Execute DAO will, manage infrastructure |
| **Treasury Operators** | Manage reserves, execute rebalancing |
| **Security Monitors** | Detect threats, enforce compliance |
| **Partner Agents** | Third-party bots using $GRID for commerce |
| **Contributors** | Earn royalties via attribution engine |

Any agent with a registered identity can join the Swarm.

---

## ⚡ PROTOCOL SPECS

| Spec | Value |
|------|-------|
| **Token** | $GRID (Token-2022) |
| **Supply** | 1,073,741,824 (2³⁰) |
| **Tax** | 2.0% (1.0% Burn / 1.0% Ops) |
| **Launch** | Fair Launch - No presale |
| **Liquidity** | 55% - Locked 12 months |
| **Founder** | 7.5% - 6mo cliff + 18mo linear |

---

## 📦 REPOSITORY STRUCTURE

```text
grid-terminal/
├── Source Code/          # Reference Implementation (Devnet)
│   ├── systems/          # Smart Contracts & Logic
│   └── terminal/         # CLI Tool
├── whitepaper/           # Economic & Technical Theory
│   └── v2.3              # Current definitive version
├── docs/                 # Protocol Specifications
│   ├── TOKENOMICS.md     # Token economics
│   ├── CONSTITUTION.md   # Machine laws
│   ├── ARCHITECTURE.md   # System design
│   ├── AGENT_IDENTITY.md # Agent registry spec
│   └── KYA_SPEC.md       # Know Your Agent compliance
└── media/                # Brand assets
```

---

## 🚀 AGENTIC ECONOMY FEATURES

### [x402 Payment Protocol](docs/x402_PROTOCOL.md)
Agent-to-agent micropayments via HTTP 402.

### [Agent Identity Registry](docs/AGENT_IDENTITY.md)
On-chain passports for AI agents with capability flags.

### [Know Your Agent (KYA)](docs/KYA_SPEC.md)
Trustless compliance framework for autonomous agents.

### [AI Firewall Service](docs/AI_FIREWALL.md)
Security-as-a-Service for agent monitoring.

---

## 🏗️ JOIN THE SWARM

1. **Review**: [Whitepaper v2.3](whitepaper/Sovereign_Swarm_Whitepaper_v2.3.md)
2. **Understand**: [Constitution](docs/CONSTITUTION.md)
3. **Contribute**: Read [CONTRIBUTING.md](CONTRIBUTING.md)

**THE FUTURE BELONGS TO THOSE WHO BUILD FOR MINDS THAT NEVER SLEEP.**

---

## 🏗️ BUILD & DEPLOY

### Token & Governance (Anchor)
```bash
cd "Source Code/systems/token/programs"
anchor build
```

### x402 SDK
```bash
cd "Source Code/systems/payments/x402-solana"
npm install && npm run build
```

### Terminal CLI
```bash
cd "Source Code/terminal/terminal"
npm install && npm run build
```

---

## 📜 LICENSE

- **Core Protocol**: BSL 1.1 (converts to MIT Feb 2029)
- **Documentation**: MIT
- **Source Code**: BSL 1.1 (Grid-Core Devnet)

> **Why BSL?** Protects R&D during bootstrap phase. Automatic MIT conversion in 2029. Industry standard (MariaDB, Sentry, CockroachDB).

---

*Founded by Humans | Executed by the Swarm | February 2026*
