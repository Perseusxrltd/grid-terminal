---
id: roadmap-governance
title: Governance and bonded participation
release: R0
status: specified
canonicalSource: docs/roadmap/governance.md
updatedAt: 2026-10-14
implementationRefs: []
limitations: Activation contract for a later gate. Voting, lock-based weight, and bonds are not available. This page is not a yield, redemption, or insurance offer.
---

# Governance and bonded participation

> Current Status: public specification; not an active live-economy claim.

**Thesis.** Votes may govern mutable operational parameters and allowed upgrade paths. Immutable mint properties cannot be changed by a vote. Bonding is an optional opt-in escrow. Before penalty rules exist, a bond is a non-slashable time lock. Stake is not insurance, and a bond does not authorize a spend or create coverage.

**Gate.** R4. This module stays inactive through the public devnet release and the mainnet token release.

## What stays disabled

There is no public fee-share distribution, no quoted return, no treasury betting, no profit entitlement, and no pro-rata treasury redemption. A revenue-distribution proposal would need its own reviewed economic and legal report. Until that report exists, the capability stays off.

No `slash` action is exposed. Stopping an action inside a vault is not compensation for a loss outside the protocol.

An operator title does not create signing authority. Keys, thresholds, and timelocks do.

## Selected rules, once the gate is open

These numbers are the specification for a future build. They are not live parameters.

- Vote weight is an account calculation, not a transferable claim. Supported locks are 90, 180, 365, and 730 days. Weight is `floor(net locked amount * max(0, unlock time - now) / 31536000 seconds)`. The maximum weight is 2x at 730 days. There is no second tier multiplier.
- A proposal uses one snapshot, or an equivalent that prevents deposit, withdraw, and revote manipulation. Proposal duration is 259200 seconds. Quorum is at least 10% of eligible voting power at that snapshot. Empty eligible power is not quorum. Ordinary passage is strictly more than half of non-abstaining valid votes. Upgrades and any expansion of economic authority need at least two thirds. Execution waits at least 259200 seconds after passage.
- One voting source and one escrow mechanism have to be specified before mainnet lock deposits are enabled.
- Founder and team allocation authority cannot vote during the first 365 days, and unvested balances never vote. After a transfer to an unrelated holder, the protocol does not attempt global identity tracing. The exclusion is disclosed at the custody level.
- The protocol treasury and the ecosystem reserve are not circulating community voting power. An allocation vault cannot vote itself into release.
- Optional bonded status uses a gross target of 1000 GRID, measured as net escrowed GRID after fees. The threshold is a participation signal, not coverage. A larger balance does not raise a spend limit. Spend limits stay explicit.

## Activation dependencies

All of the following are required before the gate can be called open:

1. The identity, policy vault, receipt, and fee programs exist and have passed their own release tests.
2. Governance threat and custody review is recorded for the exact build.
3. Stake and withdraw fee behavior is tested, including the net-escrow measurement.
4. Conflict and appeal rules are specified. See the liability activation contract.
5. The founder and team voting exclusion is enforced by the escrow, not by a disclaimer.
6. No public interface can turn on insurance, betting, yield, paid licenses, or binding penalties while this gate is closed.

Returning to the [roadmap gate table](../../ROADMAP.md).
