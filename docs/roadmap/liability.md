---
id: roadmap-liability
title: Liability and disputes
release: R0
status: specified
canonicalSource: docs/roadmap/liability.md
updatedAt: 2026-10-14
implementationRefs: []
limitations: Activation contract for a later gate. No insurance, compensation, or binding dispute service is offered.
---

# Liability and disputes

> Current Status: public specification; not an active live-economy claim.

**Thesis.** Real coverage needs separately funded reserves, written terms, and loss limits. A volatile token can be supplementary collateral. It cannot promise stable-value compensation. Funds required to pay a valid claimant are not burned to support a deflationary narrative.

**Gate.** R6 for a funded liability pilot. Dispute experiments may be rehearsed earlier only as nonbinding trials, and they are not a service.

## What stays disabled

No insurance is active. No premium is collected. No binding penalty transfers assets. No public or steward console exposes a `slash` action. A vault that refuses a spend is not compensation for an off-protocol loss.

Marketing must not describe this module as coverage, a compliance badge, or a legal judgment.

## Funded pilot, once the gate is open

The pilot is a narrow contractual compensation experiment:

- Counsel has reviewed the terms.
- The reserve is a separately funded stable-value amount, with a per-event cap and an aggregate cap no greater than the committed reserve.
- A named event, an authorized trigger, and an oracle review exist. An agent-written self-assertion is not a trigger.
- Claim states are `reported`, `evidence_verified`, `challenge_open`, `accepted` or `rejected`, then `paid`, with a seven-day challenge.
- Outage and correlated-loss tests have been run. Consent and an appeal path exist.
- GRID posted as collateral uses a stated conservative valuation and an explicit oracle-failure rule.

A simulator that uses synthetic reserves and pays nothing is not this pilot. It cannot be labeled as coverage.

## Nonbinding dispute trial

This trial is a product experiment, not a court and not legal fairness:

- Three panel members are drawn without replacement from a voluntary roster. Parties, their declared affiliated operators, and prior jurors on the case are excluded.
- Randomness is verifiable and bound to the case identifier and the selection round.
- Seven days are allowed for evidence and seven days for a decision. Two matching votes are required.
- One appeal is allowed, to five new members, needing three matching votes. The first outcome stays nonbinding while an appeal is open.
- If fewer than three eligible participants exist, the case stays `awaiting_panel`. It is not decided by the founder.
- No asset moves on a panel result until counsel-reviewed terms and a resolution contract are approved.

## Activation dependencies

1. The governance and custody gates required by the token release are already met.
2. Named reserve funding, the covered-event definition, the trigger quorum, and the contractual terms are owner-supplied facts.
3. Tests cover forged proof, a duplicated claim, correlated claims, a reserve shortfall, and an unavailable oracle.
4. No public interface can activate insurance, betting, yield, paid licenses, or binding penalties while this gate is closed.

Returning to the [roadmap gate table](../../ROADMAP.md).
