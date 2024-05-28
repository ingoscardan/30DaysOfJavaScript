import mapArray from "./day4.apply-transform-over-each-element-in-array";

// Callback functions
function plusOne(n) { return n + 1; }
function constant(n, i) { return 42; }
function plusI(n, i) { return n + i; }

test('Convert each element to is value plus 1', () => {
  const arr = [1, 2, 3];

  const usingMap = arr.map(plusOne);
  const myMapImplementation = mapArray(arr, plusOne);

  for(let i = 0; i < usingMap.length; i++) {
    expect(usingMap[i]).toBe(myMapImplementation[i]);
  }
});

test("Convert each element to is value plus to it's index", () => {
  const arr = [1, 2, 3];

  const usingMap = arr.map(plusI);
  const myMapImplementation = mapArray(arr, plusI);

  for(let i = 0; i < usingMap.length; i++) {
    expect(usingMap[i]).toBe(myMapImplementation[i]);
  }
});

test("Maps all to a constant value", () => {
  const arr = [1, 2, 3];

  const usingMap = arr.map(constant);
  const myMapImplementation = mapArray(arr, constant);

  for(let i = 0; i < usingMap.length; i++) {
    expect(usingMap[i]).toBe(myMapImplementation[i]);
  }
});