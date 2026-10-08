import { test } from 'node:test';
import assert from 'node:assert/strict';
import { increment } from '../src/counter.ts';

test('increment adds one', () => {
  assert.equal(increment(1), 2);
});
