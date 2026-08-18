import test from 'node:test';
import assert from 'node:assert/strict';

test('project exposes a React baseline', async () => {
  const pkg = await import('../package.json', { with: { type: 'json' } });
  assert.equal(pkg.default.dependencies.react, '18.3.1');
  assert.equal(pkg.default.engines.node, '20.x');
});
