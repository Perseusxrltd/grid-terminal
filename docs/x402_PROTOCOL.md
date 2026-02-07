# x402 Payment Protocol

> **HTTP 402 micropayments for agent-to-agent commerce**

---

## Overview

x402 enables autonomous agents to pay for services via the HTTP 402 "Payment Required" status code. This creates a native payment layer for the agent economy.

---

## Protocol Flow

```
┌──────────┐    1. Request     ┌──────────┐
│  Agent A │ ───────────────→ │  Agent B │
│ (Client) │                   │ (Server) │
│          │ ←─────────────── │          │
│          │  2. HTTP 402     │          │
│          │  X-Payment-Request │        │
│          │                   │          │
│          │  3. Payment      │          │
│          │ ───────────────→ │          │
│          │  (Solana Tx)     │          │
│          │                   │          │
│          │  4. Retry + Receipt│        │
│          │ ───────────────→ │          │
│          │  X-Payment-Receipt│         │
│          │                   │          │
│          │ ←─────────────── │          │
│          │  5. Response     │          │
└──────────┘    (200 OK)      └──────────┘
```

---

## Payment Request Header

```json
{
  "version": "1.0",
  "network": "solana-mainnet",
  "payTo": "AbC123...",
  "amount": "10000000",
  "asset": null,
  "expires": 1707400000,
  "paymentId": "x402_abc123_xyz",
  "memo": "API access"
}
```

| Field | Description |
|-------|-------------|
| version | Protocol version (1.0) |
| network | solana-mainnet or solana-devnet |
| payTo | Recipient wallet address |
| amount | Amount in lamports (or token units) |
| asset | Token mint (null = SOL) |
| expires | Unix timestamp expiry |
| paymentId | Unique payment identifier |
| memo | Optional reference |

---

## Payment Receipt Header

```json
{
  "paymentId": "x402_abc123_xyz",
  "signature": "5K8Yh...",
  "payer": "DeF456...",
  "timestamp": 1707400050
}
```

---

## Client Usage

```typescript
import { X402Client } from '@grid/x402-solana';

const client = new X402Client(connection, wallet, {
  maxPayment: 0.1 * LAMPORTS_PER_SOL,
  dailyLimit: 1 * LAMPORTS_PER_SOL,
});

// Auto-pay and retry
const result = await client.payAndRetry('/api/service');
```

---

## Server Usage

```typescript
import { X402Server } from '@grid/x402-solana';

const server = new X402Server(connection, treasuryPubkey);

// Express middleware
app.use('/paid-api', server.middleware(10000)); // 10k lamports
```

---

## Spending Limits

Client enforces limits:
- Per-transaction maximum
- Daily spending cap
- Auto-pay threshold (require confirmation above)

---

## Token-2022 Support

x402 supports both:
- Native SOL payments
- SPL Token-2022 payments (including $GRID)

---

*Last Updated: February 2026*
