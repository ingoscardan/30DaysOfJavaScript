import truthyAndFalsyEvaluator from "./truthyAndFalsyEvaluator";

test('true to be true', () => {
  expect(truthyAndFalsyEvaluator(true)).toBe(true);
});

test('Empty object to be true', () => {
  expect(truthyAndFalsyEvaluator({})).toBe(true);
});

test('Empty array to be true', () => {
  expect(truthyAndFalsyEvaluator([])).toBe(true);
});

test('A number to be true', () => {
  expect(truthyAndFalsyEvaluator(23)).toBe(true);
});

test('A non empty string to be true', () => {
  expect(truthyAndFalsyEvaluator("Non empty string")).toBe(true);
});