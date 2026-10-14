---
id: roadmap-guardians
title: Guardian verification
release: R0
status: specified
canonicalSource: docs/roadmap/guardians.md
updatedAt: 2026-10-14
implementationRefs: []
limitations: Activation contract for a later gate. There is no Guardian network, no license sale, and no reward emission.
---

# Guardian verification

> Current Status: public specification; not an active live-economy claim.

**Thesis.** Guardians are independent verification and retrieval operators. They are not Solana consensus, and they are not another chain. Pilot registration is free. A heartbeat proves that a key responded. It does not prove that useful work was done or that data was kept.

**Gate.** The pilot evidence is an R4 dependency. Service rewards, if any, are later than the pilot and stay off until a budget and terms exist.

## What stays disabled

No license is sold. No hidden emissions tranche exists. No new tokens are minted to pay operators. No penalty is applied to a Guardian in the pilot. Three operators in a test are a test target, not a claim that the set is permissionless or decentralized.

## Pilot rules, once the gate is open

- Registration is free apart from network costs.
- Work is assigned independently of the operator who publishes it.
- Each job carries a signed challenge with a 32-byte unpredictable nonce. The challenge interval is five minutes and the response deadline is ten minutes. One response is accepted per node and job.
- Retrieval is checked by digest. A signature on a status string is not a retrieval.
- The minimum pilot is three independently operated nodes and one documented outage drill. Node identities are facts supplied by those operators. They are not simulated.

## Activation dependencies

1. A seven-day test that includes one node offline, a stale or replayed response, invalid content, and loss of the source data.
2. Owner-supplied identities for the independent operators. Agents do not invent those identities.
3. Any later reward uses an explicitly budgeted ecosystem allocation and a bounded epoch budget approved through the governance gate. Service payments may use SOL or a stable asset so a tool call is not forced through the GRID transfer fee.
4. No public interface offers a paid Guardian license while this gate is closed.

Returning to the [roadmap gate table](../../ROADMAP.md).
