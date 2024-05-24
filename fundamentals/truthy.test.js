const truthyAndFalsyEvaluator = require("./truthyAndFalsyEvaluator")

test('true to be true', () => {
  expect(true).toBe(true);
});

test('Empty object to be true', () => {
  const result = truthyAndFalsyEvaluator({});
  expect(result).toBe(true);
});

test('Empty array to be true', () => {
  expect([]).toBe(true);
});

test('A number to be true', () => {
  expect(23).toBe(true);
});

test('A non empty string to be true', () => {
  expect('non empty string' === true).toBe(true);
});