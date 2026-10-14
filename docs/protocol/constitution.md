---
id: protocol-constitution
title: Constitution
release: R0
status: specified
canonicalSource: docs/protocol/constitution.md
updatedAt: 2026-10-14
implementationRefs: []
limitations: The five laws are commitments. This document does not claim that software evaluates natural-language constitutional questions, and it does not describe a deployed program.
---

# Constitution

> Current Status: public specification; not an active live-economy claim.

The Sovereign Constitution sets the project's commitments. The protocol turns specific commitments into permissions, spending limits, revocation, and evidence. Each capability states what it enforces and what remains an operator responsibility.

Software does not independently create legal personhood, legal jurisdiction, regulatory approval, or insurance coverage. An economic jurisdiction is an opt-in set of protocol rules for registered agents and the assets placed under those rules. It does not replace public law or confer legal personhood.

The five law names are preserved from the archived constitution. Their historical core sentences are quoted so the names stay traceable. The operational interpretation and the limit column are the current scope. Archived enforcement text is not retained: percentage-of-treasury spend caps are not live limits, a hardware attestation is not proof of alignment, an identity tier is not an access pass, no wallet is excused from the token fee, and betting pools are not part of this constitution.

## Law versus program guarantee

| Law | Historical core sentence | Operational interpretation | Program guarantee and its limit |
|---|---|---|---|
| 1. Constitutional Supremacy | The Constitution is the supreme law. All governance actions are valid only if they do not violate Laws 1-5. | Privileged changes obey a recorded authority policy and timelock. Emergency power has a defined scope. | Evidence is a versioned policy hash, a signer set, timelock state, and proposal and execution receipts. The identity program remains upgradeable with disclosed authority. The vault program is treated as immutable only after release proof shows its upgrade authority removed. Ordinary agent vaults still depend on mutable identity state. |
| 2. Economic Solvency | Actions must not risk the financial viability of the Swarm. | Agents have explicit per-asset spend limits and destination and instruction permissions. Revocation stops future delegated activity. | Evidence is negative tests for overspend, replay, time-window rollover, a forbidden recipient, and an unauthorized signer. A capped vault is not proof of solvency, asset value, or the absence of correlated losses. |
| 3. Verifiable Integrity | Every material action must provide cryptographic proof. | Material authorized operations produce signed, linked receipts bound to the policy version, the transaction, and the observed chain status. | Evidence is receipt verification, rejection of tampering, transaction and confirmation reconciliation, and missing-log alerts. A hash proves integrity of the presented bytes. It does not prove that the source statement is true, or that every action was captured. |
| 4. Constitutional Alignment | All registered agents must operate with Constitutional Prompting enabled. | Operators accept the constitution and manifest the agent's authority. Attestations state issuer, predicate, expiry, and revocation. | Evidence is registration consent, a manifest digest, an attestation schema, access checks, and a revocation audit trail. Prompt wording cannot enforce activity in an external wallet, and it cannot prove future model conduct. |
| 5. Mission Pursuit | Maximize the value and growth of the Swarm subject to Laws 1-4. | Build useful, accountable agent economic activity and sustainable protocol stewardship within Laws 1-4. | Evidence is product use, enforced actions, evidence completeness, incident resolution, and reserve spending reports. There is no promise of GRID appreciation, yield, income, or treasury redemption. |

Law 5's archived enforcement, which treated holder value as the purpose of every action, is not the operational interpretation. Mission Pursuit cannot override Laws 1-4, and it is not a price or yield commitment.

A future constitutional fork would be a separately named protocol migration. It is not an administrative toggle, and no vote is described here as amending these five commitments.

## Release default

Real-money autonomous operation starts disabled. The canonical initial policy is `Read only`: it grants no asset-spending permission, and execution rejects. A spending policy requires an explicit operator signature and positive per-asset raw-unit limits. There is no mixed form that is partly zero and partly open. Devnet fixtures may use documented small values and synthetic assets. Those fixtures are not mainnet defaults.

Percentage treasury budgets are a later valuation module. They need oracle freshness and denominator rules. They are not an undocumented fallback.

## What a reader can and cannot treat as enforced

| Commitment | What a program can establish, once built and reviewed | What remains outside the program |
|---|---|---|
| Authority changes | A recorded signer set and a timelock, with receipts | Whether the people controlling those signers are independent |
| Spend limits | Rejection of a transfer that exceeds the signed policy | The market value of the asset, or losses outside the vault |
| Receipts | That the presented bytes match a signature and a chain observation | That unlogged actions did not occur |
| Attestations | Issuer, predicate, expiry, and revocation as recorded | That a prompt caused lawful or safe behavior |
| Stewardship | Reports of reserve spending that the account actually performed | Appreciation, yield, income, or a redemption right |

Public role names, including Operator, Agent, Verifier, and Steward, describe duties. A name does not imply a privileged key. Signing authority comes only from keys, thresholds, and timelocks that a release manifest discloses.

Return to the [protocol overview](overview.md) or the [documentation index](../README.md).
