import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
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
    /Current Status: public specification; not an active live-economy claim\./i,
    `${relativePath} must label future economics/enforcement as non-active public specification`,
  );
}

describe('GRID terminal public release boundary', () => {
  it('locks PROJECT_BOUNDARIES to grid-core as source and grid-terminal as public layer', () => {
    const boundaries = readText('PROJECT_BOUNDARIES.md');
    assert.match(boundaries, /grid-core` = canonical implementation\/source repo/);
    assert.match(boundaries, /grid-terminal` = public\/sanitized release layer/);
    assert.match(boundaries, /not the canonical implementation source/);
    assert.match(boundaries, /grid-core\/systems\/molthub-bridge\//);
    assert.match(boundaries, /grid-terminal\/docs\/archive\/integrations\/molthub-grid-bridge-v0\.md/);
  });

  it('describes MoltHub metadata as a public release layer', () => {
    const metadata = readText('.molthub/project.md');
    assert.match(metadata, /title: "GRID Public Release Layer"/);
    assert.match(metadata, /public\/sanitized release layer/i);
    assert.match(metadata, /Open-Source Code\/` is a placeholder for future allowlisted code exports/i);
    assert.match(metadata, /verified against `grid-core`/i);
    assertNoImplementationOwnershipClaim('.molthub/project.md');
  });

  it('keeps README copy from claiming implementation ownership', () => {
    const readme = readText('README.md');
    assert.match(readme, /public\/sanitized GRID release layer/i);
    assert.match(readme, /Canonical implementation truth lives in `grid-core`/);
    assert.match(readme, /Open-Source Code\/\s+# Placeholder for future allowlisted code exports; not canonical source/i);
    assertNoImplementationOwnershipClaim('README.md');
  });

  it('publishes the relaunch as planning only without a funding or partnership claim', () => {
    const checkpoint = readText('docs/RELAUNCH_CHECKPOINT_2026-09-21.md');
    const readme = readText('README.md');
    assertFutureSpecDisclaimer('docs/RELAUNCH_CHECKPOINT_2026-09-21.md');
    assert.match(checkpoint, /Documentation-only prerelease/);
    assert.match(checkpoint, /not a rebuilt website, new program deployment, verified devnet release, token launch, or funding-ready release/);
    assert.match(readme, /The rebuild is not complete/);
    assert.match(readme, /docs\/RELAUNCH_CHECKPOINT_2026-09-21\.md/);

    for (const content of [readme, checkpoint]) {
      assert.match(content, /No funding address is authorized by this checkpoint/);
      assert.match(content, /MoltHub is an inactive historical integration/);
      assert.match(content, /runtime-neutral/);
      assert.doesNotMatch(content, /[A-Za-z]:\\Users\\|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|(?:secret|private|signing)[_-]?key\s*[:=]/i);
      assert.doesNotMatch(content, /github\.com\/[^/]+\/(grid-core|grid-admin|grid-interface)/i);
      assert.doesNotMatch(content, /\b[1-9A-HJ-NP-Za-km-z]{32,44}\b/);
      assert.doesNotMatch(content, /Compliance-Ready|400MS FINALITY|JOIN THE JURISDICTION/i);
    }
  });

  it('keeps the public launch plan staged, sanitized and free of funding instructions', () => {
    const plan = readText('docs/LAUNCH_PLAN.md');
    assertFutureSpecDisclaimer('docs/LAUNCH_PLAN.md');
    assert.match(plan, /No funding address is authorized by this plan/);
    assert.match(plan, /MoltHub is an inactive historical integration/);
    assert.match(plan, /runtime-neutral/);
    assert.match(plan, /gates, not promised dates/);
    assert.doesNotMatch(plan, /[A-Za-z]:\\Users\\|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|(?:secret|private|signing)[_-]?key\s*[:=]/i);
    assert.doesNotMatch(plan, /github\.com\/[^/]+\/(grid-core|grid-admin|grid-interface)/i);
    assert.doesNotMatch(plan, /\b[1-9A-HJ-NP-Za-km-z]{32,44}\b/);
    assert.doesNotMatch(plan, /Compliance-Ready|400MS FINALITY|JOIN THE JURISDICTION/i);
    assert.match(readText('README.md'), /docs\/LAUNCH_PLAN\.md/);
  });

  it('marks Open-Source Code as a derivative and sanitized placeholder', () => {
    for (const file of ['Open-Source Code/README.md', 'Open-Source Code/README_OPENSOURCE.md']) {
      const content = readText(file);
      assert.match(content, /public\/sanitized derivative/i);
      assert.match(content, /not the canonical implementation source/i);
      assert.match(content, /grid-core/i);
    }
  });

  it('keeps retired prototype code, deployment scripts and dependencies out of the repository', () => {
    for (const retired of ['Open-Source Code/systems', 'Open-Source Code/terminal']) {
      assert.equal(fs.existsSync(path.join(root, retired)), false, `${retired} must not exist`);
    }

    assert.deepEqual(fs.readdirSync(path.join(root, 'scripts')), ['verify-boundaries.mjs']);

    const manifest = JSON.parse(readText('package.json'));
    assert.equal(manifest.dependencies, undefined, 'package.json must not declare dependencies');
    assert.equal(manifest.devDependencies, undefined, 'package.json must not declare devDependencies');

    const retiredTerms = [
      ['Stea', 'lth Whale'].join(''),
      ['obfuscate', 'whale'].join(' '),
      ['Grid', 'Private'].join('-'),
      ['deployer', 'pk'].join('_'),
    ].map((term) => term.toLowerCase());

    const offenders = [];
    const walk = (directory) => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (entry.name === '.git' || entry.name === 'node_modules') continue;
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
          if (path.relative(root, fullPath).split(path.sep).join('/') === 'docs/archive') continue;
          walk(fullPath);
        } else if (entry.isFile()) {
          const buffer = fs.readFileSync(fullPath);
          if (buffer.includes(0)) continue;
          const text = buffer.toString('utf8').toLowerCase();
          if (retiredTerms.some((term) => text.includes(term))) {
            offenders.push(path.relative(root, fullPath));
          }
        }
      }
    };
    walk(root);
    assert.deepEqual(offenders, [], 'retired prototype terms found in tracked text files');
  });

  it('keeps the archived MoltHub bridge doc pointed at grid-core implementation ownership', () => {
    const bridge = readText('docs/archive/integrations/molthub-grid-bridge-v0.md');
    assert.match(bridge, /Inactive integration \(2026-10-14\)/);
    assert.match(bridge, /implementation lives in private `grid-core` under `systems\/molthub-bridge\/`/i);
    assert.match(bridge, /public document intentionally avoids private deployment internals/i);
    assert.match(bridge, /MoltHub should remain the work coordination, evidence, mission, review, and receipt layer/i);
  });

  it('labels archived live-economy docs as future/spec, not active deployment truth', () => {
    for (const file of [
      'README.md',
      'docs/archive/v3.1/node_sale.md',
      'docs/archive/v3.1/guardian_nodes.md',
      'docs/archive/v3.1/INSURANCE_SPEC.md',
      'docs/archive/v3.1/IDENTITY_ENFORCEMENT.md',
      'docs/archive/v3.1/KYA_SPEC.md',
    ]) {
      assertFutureSpecDisclaimer(file);
    }

    const nodeSale = readText('docs/archive/v3.1/node_sale.md');
    assert.doesNotMatch(nodeSale, /\|\s*\*\*Tier 1 \(Early Supporter\)\*\*\s*\|[^\n]*\|\s*\*\*ACTIVE\*\*\s*\|/i);
    assert.match(nodeSale, /not active/i);

    const readme = readText('README.md');
    assert.doesNotMatch(readme, /COMPLIANCE-READY INFRASTRUCTURE/i);
    assert.match(readme, /PUBLIC SPECIFICATION STATUS/i);
  });

  it('archives v3.1 docs with original bytes recoverable from the manifest', () => {
    const manifest = JSON.parse(readText('docs/archive/manifest.json'));
    assert.equal(manifest.schema_version, 'grid.archive-manifest.v1');
    const originals = manifest.entries.map((entry) => entry.original_path);
    assert.deepEqual(originals, [...originals].sort());

    for (const entry of manifest.entries) {
      assert.equal(fs.existsSync(path.join(root, entry.original_path)), false, entry.original_path);
      const archived = fs.readFileSync(path.join(root, entry.archive_path));
      const body = entry.archive_path.endsWith('.json')
        ? archived
        : Buffer.from(archived.toString('utf8').split('\n').slice(2).join('\n'));
      assert.equal(createHash('sha256').update(body).digest('hex'), entry.sha256, entry.archive_path);
    }

    for (const kept of ['docs/RELAUNCH_CHECKPOINT_2026-09-21.md', 'docs/LAUNCH_PLAN.md']) {
      const text = readText(kept);
      assert.doesNotMatch(text, /^> \*\*Superseded \(2026-10-14\)\.\*\*/);
    }
  });
});
