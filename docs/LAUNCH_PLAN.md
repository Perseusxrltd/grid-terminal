# GRID launch plan (public)

Last updated October 14, 2026. Public, sanitized summary of the execution plan that follows the [September 21 relaunch checkpoint](RELAUNCH_CHECKPOINT_2026-09-21.md).

> Current Status: public specification; not an active live-economy claim.

## Where things stand

The relaunch design is complete and the execution plan is now fixed: every task is ordered by dependency, with explicit completion evidence. Implementation of the new protocol, services and website has not been released. Nothing described here is live, no token has been created for the relaunch, and earlier deployments are not part of it.

No funding address is authorized by this plan. GRID is runtime-neutral. MoltHub is an inactive historical integration, not a dependency or a partnership.

## Release stages

These are gates, not promised dates. A stage is reached only when its evidence is published.

| Stage | What will be true | How you will be able to verify it | What it does not mean |
|---|---|---|---|
| 0. Honest public surface | The website, this repository and the documentation no longer present unbuilt systems as current. Legacy prototype code and deployment scripts are removed from `Open-Source Code/` and `scripts/`; the v3.1 documents are archived with banners | This repository's history and checks; the website's documentation pages | Not a product release |
| 1. Public devnet release (GRID v1.0 on devnet) | A rebuilt website and a working devnet application: register an agent with a separate signing key, give it a bounded spending policy over test assets, see allowed and denied actions, verify receipts independently, revoke it. The full token mechanics (fixed supply, transfer fee with burn and reserve, vesting, locked liquidity) are rehearsed on devnet with test assets | A tagged release in this repository with a public release manifest, generated status documentation, and receipts anyone can check against the chain | Devnet only; no real value; not a token launch |
| 2. Mainnet readiness | Independent external security review completed, custody held by an independently controlled multisig with a time delay, legal review completed, mainnet procedure simulated end to end | Published review scope and outcome, authority disclosures, release manifest | Not yet a launch; no sale of any kind |
| 3. Mainnet launch (GRID v1.0) | The GRID mint, its allocations, fee reserve, vesting escrows and liquidity lock exist on mainnet exactly as disclosed, and the website shows the verified state | Addresses and authorities published in the release manifest and checkable on chain | No promise of price, value, yield or listing |
| Later | Governance voting, bonded participation, Guardian verification, payments and liability arrangements, each behind its own reviewed gate | Separate activation documents under `docs/roadmap/` | Not part of v1.0 |

## Selected direction

- **Product:** accountable autonomy on Solana. Registered agents, explicit spending policies over dedicated assets, and verifiable records of what happened, with revocation that works.
- **Token (selected for the relaunch; final values will be published in `docs/token/` from one canonical source before any mint exists):** fixed supply of 1,073,741,824 GRID with 9 decimals; a native 2% transfer fee whose collected amount is split between burning and a protocol reserve; no transfer hook, no fee exemptions, no launch tax; founder and team allocations vest over time with no tokens at launch; the project's liquidity position is locked.
- **No sale:** no presale, no seed round, no paid node or Guardian license sale, no auction. Historical documents that describe such sales are superseded.
- **Authority:** the vault program becomes non-upgradeable only after independent review; the identity program stays upgradeable under multisig governance with a time delay, and that dependency will be disclosed, not hidden.
- **Integrations:** runtime-neutral; tested adapters only; no implied partnership with any tool or platform used during development.

## Work in this repository

| Order | Deliverable | Plan task |
|---|---|---|
| 1 | Remove legacy prototype code, legacy treasury and deployment tooling that does not match the relaunch's transparency commitments, and the deployment scripts in `scripts/`; keep `Open-Source Code/` as an explanatory placeholder until the reviewed v1 export exists | M0.06 |
| 2 | Secret scanning and boundary checks in CI | M0.05, M1.07 |
| 3 | Archive every v3.1 document to `docs/archive/v3.1/` byte-identical, with a superseded banner and a manifest; archive the MoltHub bridge document as inactive | M1.04 |
| 4 | New entry documents: `docs/README.md`, `docs/protocol/overview.md`, `docs/protocol/constitution.md` | M1.05 |
| 5 | Roadmap as activation contracts: `docs/roadmap/*` and an undated `ROADMAP.md` gate table | M1.06 |
| 6 | `SECURITY.md`, a cleaned `CONTRIBUTING.md`, and a definitive license text | M1.08 |
| 7 | Public documentation manifest consumed by the website's deterministic sync | M4.03 |
| 8 | Token disclosures: `docs/token/economics.md`, `authorities.md`, `vesting-liquidity.md` | M4.05 |
| 9 | User contracts: `docs/protocol/{identity,policy-vaults,receipts}.md`, `docs/build/{quickstart,sdk,runtime-adapters}.md` | M4.06 |
| 10 | Claims gate that fails any active document stating an unverified capability | M4.12 |
| 11 | Public release manifests in `release-manifests/` for the devnet release and, later, the mainnet launch | M5.10, M7.01 |

Every active document will carry frontmatter stating its release, status and limitations. Network addresses will appear only in generated release data, never typed by hand.

## How progress will be reported

Each stage ends with a tagged release in this repository containing the public release manifest and updated status documentation. This file is updated at every stage. Older documents are never silently rewritten; they are archived with a banner and replaced.

## What this plan does not do

It is not investment, legal or tax advice, not an offer of any token, not a schedule, and not a funding instruction. It does not certify any existing deployment, website or document as accurate. Private security and operational material is not published here.

Return to the [repository overview](../README.md).
