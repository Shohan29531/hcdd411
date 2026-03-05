// math.test.js
import test from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract } from './math.js';

test('add()', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract()', () => {
  assert.equal(subtract(2, 3), -1);
});