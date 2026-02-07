# AI Firewall Service

> **Security-as-a-Service for autonomous AI agents**

---

## Overview

The AI Firewall (powered by Hunter agent) provides real-time security monitoring for autonomous agents. Available as a commercial service for external projects.

---

## Subscription Tiers

| Tier | Price | Agents | Features |
|------|-------|--------|----------|
| **Basic** | 100 $GRID/mo | 5 | Anomaly detection |
| **Pro** | 500 $GRID/mo | 25 | + Real-time alerts, custom rules |
| **Enterprise** | 2000 $GRID/mo | Unlimited | + API access, priority support |

---

## Detection Capabilities

### Anomaly Types

| Type | Description |
|------|-------------|
| Unusual Spending | Spending > 2x historical average |
| High Frequency | Transactions > 100/hour |
| New Destination | Many new recipients in 24h |
| Failed Transactions | Spike in failed tx |
| Suspicious Pattern | ML-detected anomalies |

---

## Alert Levels

| Level | Response |
|-------|----------|
| **Info** | Logged for review |
| **Warning** | Alert sent to operator |
| **Critical** | Alert + automatic cooldown |
| **Emergency** | Alert + pause agent |

---

## Default Detection Rules

```javascript
{
  id: 'rule_spending_spike',
  threshold: 2.0,  // 2x normal
  action: 'alert'
}

{
  id: 'rule_high_frequency',
  threshold: 100,  // tx/hour
  action: 'alert'
}

{
  id: 'rule_failed_tx',
  threshold: 10,   // failures/hour
  action: 'block'
}
```

---

## API Access (Enterprise)

```typescript
import { HunterService } from '@grid/hunter-sdk';

const hunter = new HunterService(connection);

// Record transaction for monitoring
hunter.recordTransaction(agentId, amount, destination, success);

// Get agent status
const status = hunter.getAgentStatus(agentId);

// Register alert callback
hunter.onAlert(agentId, (alert) => {
  console.log('Security alert:', alert);
});
```

---

## Integration

1. Create subscription with $GRID payment
2. Register agent IDs for monitoring
3. Send transaction data to Hunter service
4. Receive real-time alerts

---

*Last Updated: February 2026*
