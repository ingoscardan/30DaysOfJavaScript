/**
 * Given an integer n, return a counter function.
 * This counter function initially returns n and then returns 1 more than the previous
 * value every subsequent time it is called (n, n + 1, n + 2, etc.).
 * @param n
 * @return {function(*): *}
 */
function createCounter(n) {
  return function(){
    return n++;
  }
}
const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());


/**
 * In Javascript, you can declare functions within other functions and return them.
 * The inner function has access to any variables declared above it.
 *
 * The inner function add has access to a.
 * This allows the outer function to serve as a factory of new functions, each with different behavior.
 * @param a
 * @return {function(*): *}
 */
function createAdder(a) {
  return function(b) {
    return a + b;
  }
}
const adder = createAdder(5);
console.log(adder(2));
const secondAdder = createAdder(2);
console.log(secondAdder(2));