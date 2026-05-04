import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const readText = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

function assertNoImplementationOwnershipClaim(relativePath) {
  const content = readText(relativePath);
  const forbidden = [
    /contains the \*\*Devnet\*\* implementation/i,
    /Reference Implementation \(Devnet\)/i,
    /grid-terminal[^.\n]{0,120}canonical implementation/i,
    /grid-terminal[^.\n]{0,120}implementation source/i,
    /grid-terminal[^.\n]{0,120}real source/i,
  ];

  for (const pattern of forbidden) {
    assert.doesNotMatch(content, pattern, `${relativePath} contains ${pattern}`);
  }
}

function assertFutureSpecDisclaimer(relativePath) {
  const content = readText(relativePath);
  assert.match(
    content,
    /Current (?:Public )?Status:/i,
    `${relativePath} must label current public status`,
  );
  assert.match(
    content,
    /not (?:controlling deployment truth|an active live-economy claim)/i,
    `${relativePath} must label future economics/enforcement as non-controlling or non-active`,
  );
}

describe('GRID terminal public release boundary', () => {
  it('locks PROJECT_BOUNDARIES to grid-core as source and grid-terminal as public layer', () => {
    const boundaries = readText('PROJECT_BOUNDARIES.md');
    assert.match(boundaries, /grid-core` = canonical implementation\/source repo/);
    assert.match(boundaries, /grid-terminal` = public\/sanitized release layer/);
    assert.match(boundaries, /not the canonical implementation source/);
    assert.match(boundaries, /grid-core\/systems\/molthub-bridge\//);
    assert.match(boundaries, /grid-terminal\/docs\/integrations\/molthub-grid-bridge-v0\.md/);
  });

  it('describes MoltHub metadata as a public release layer', () => {
    const metadata = readText('.molthub/project.md');
    assert.match(metadata, /title: "GRID Public Release Layer"/);
    assert.match(metadata, /public\/sanitized release layer/i);
    assert.match(metadata, /Open-Source Code\/` contains derivative snapshots/i);
    assert.match(metadata, /verified against `grid-core`/i);
    assertNoImplementationOwnershipClaim('.molthub/project.md');
  });

  it('keeps README copy from claiming implementation ownership', () => {
    const readme = readText('README.md');
    assert.match(readme, /public\/sanitized GRID release layer/i);
    assert.match(readme, /Canonical implementation truth lives in `grid-core`/);
    assert.match(readme, /Open-Source Code\/\s+# Derivative public release snapshots, not canonical source/i);
    assertNoImplementationOwnershipClaim('README.md');
  });

  it('marks Open-Source Code as derivative and sanitized', () => {
    for (const file of ['Open-Source Code/README.md', 'Open-Source Code/README_OPENSOURCE.md']) {
      const content = readText(file);
      assert.match(content, /public\/sanitized derivative/i);
      assert.match(content, /not the canonical implementation source/i);
      assert.match(content, /grid-core/i);
    }
  });

  it('keeps the public MoltHub bridge doc pointed at grid-core implementation ownership', () => {
    const bridge = readText('docs/integrations/molthub-grid-bridge-v0.md');
    assert.match(bridge, /implementation lives in private `grid-core` under `systems\/molthub-bridge\/`/i);
    assert.match(bridge, /public document intentionally avoids private deployment internals/i);
    assert.match(bridge, /MoltHub should remain the work coordination, evidence, mission, review, and receipt layer/i);
  });

  it('labels public live-economy docs as future/spec, not active deployment truth', () => {
    for (const file of [
      'README.md',
      'docs/node_sale.md',
      'docs/guardian_nodes.md',
      'docs/INSURANCE_SPEC.md',
      'docs/IDENTITY_ENFORCEMENT.md',
      'docs/KYA_SPEC.md',
      'docs/SOVEREIGN_SWARM_WHITEPAPER_V3.1.md',
      'docs/INDUSTRIAL_WORKFLOW.md',
      'docs/legal_terms.md',
    ]) {
      assertFutureSpecDisclaimer(file);
    }

    const nodeSale = readText('docs/node_sale.md');
    assert.doesNotMatch(nodeSale, /\|\s*\*\*Tier 1 \(Early Supporter\)\*\*\s*\|[^\n]*\|\s*\*\*ACTIVE\*\*\s*\|/i);
    assert.match(nodeSale, /not active/i);

    const readme = readText('README.md');
    assert.doesNotMatch(readme, /COMPLIANCE-READY INFRASTRUCTURE/i);
    assert.match(readme, /PUBLIC SPECIFICATION STATUS/i);
  });

  it('rejects unqualified live-economy and compliance claims in public docs', () => {
    const publicDocs = [
      'README.md',
      'CONTRIBUTING.md',
      'docs/SOVEREIGN_SWARM_WHITEPAPER_V3.1.md',
      'docs/INDUSTRIAL_WORKFLOW.md',
      'docs/legal_terms.md',
      'docs/CONSTITUTION.md',
    ];
    const forbidden = [
      /Status:\s*DEFINITIVE/i,
      /Compliance-ready/i,
      /Solana Mainnet/i,
      /Real-time settlement is handled/i,
      /must lock \$GRID/i,
      /purchase of a Guardian Node License/i,
      /Guardian Node activation software is provided/i,
    ];

    for (const file of publicDocs) {
      const content = readText(file);
      for (const pattern of forbidden) {
        assert.doesNotMatch(content, pattern, `${file} contains ${pattern}`);
      }
    }
  });
});
