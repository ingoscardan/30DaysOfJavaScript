/**
 * Function Basic Syntax: f is the name of the function. (a, b) are the arguments.
 * You can write any logic in the body and finally return a result.
 * You are allowed to return nothing, and it will instead implicitly return undefined
 * @param a
 * @param b
 * @return {*}
 */
function f(a, b) {
  let sum;
  sum = a + b;
  return sum;
}
console.log('Function basic syntax', f(1, 2));

/**
 * Anonymous Function: You can optionally exclude the name of the function after the function keyword.
 * @param a
 * @param b
 * @return {*}
 */
const fAnonymousFunction = function(a, b) {
  return a + b;
}
console.log('Anonymous function: ', fAnonymousFunction(1, 2));

/**
 * You can create a function and immediately execute it in Javascript.
 * Why would you write code like this?
 * It gives you the opportunity to encapsulate a variable within a new scope.
 * For example, another developer can immediately see that sum can't be used anywhere outside the function body.
 */
const result = (function(a, b){
  return a + b;
})(1, 2);
console.log('Immediately Invoked Function Expression (IIFE):', result);

/**
 * A powerful feature of JavaScript is you can actually create functions within other functions and even return them!
 * @return {function(*, *): *}
 */
function createFunction() {
  function f(a, b){
    return a + b;
  }
  return f;
}
const functionWithinFunction = createFunction();
console.log('Functions Within Functions', functionWithinFunction(1, 2));

/**
 * JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized.
 * You can only do this if you declare functions with the function syntax.
 * @return {function(*, *): *}
 */
function createHoistedFunction() {
  return f; // the function is returned before it is initialized.
  // Although it is valid syntax, it is sometimes considered bad practice as it can reduce readability.
  function f(a, b){
    return a + b;
  }
}
const hoistedFunction = createHoistedFunction();
console.log('Hoisted Function', hoistedFunction(1, 2));

/**
 * An important topic in JavaScript is the concept of closures.
 * When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment.
 * The combination of the function and its environment is called a closure. This is a powerful and often used feature of the language.
 *
 * In this example createAdder passes the first parameter a and the inner function f has access to it.
 * createAdder serves as a factory of new functions, with each returned function having different behavior.
 * @param a
 * @return {function(*): *}
 */
function createAdder(a) {
  function f(b){
    return a + b;
  }
  return f;
}
const closureFunction = createAdder(2);
console.log('Closure Function: ', closureFunction(1));
console.log('Closure Function second invocation: ', closureFunction(4));
const anotherClosureFunction = createAdder(3);
console.log('Another Closure Function: ', anotherClosureFunction(1));

/**
 * In this example arrowFunction is the name of the function. (a, b) are the arguments. Any logic can be written inside
 * the body of the function and finally return a result.
 * @param a
 * @param b
 * @return {*}
 */
const arrowFunction = (a, b) => {
  // noinspection UnnecessaryLocalVariableJS
  let result = a + b;
  return result;
};
console.log('Arrow Function: ', arrowFunction(1, 2));


const arrowFunctionNoReturn = (a, b) => {
  console.log('Arrow function no return: ', a + b);
};
// noinspection JSVoidFunctionReturnValueUsed
const arrowFunctionResult = arrowFunctionNoReturn(1, 2); // Result is printed within the arrow function
console.log('Arrow Function result is undefined due no return within the function\'s body: ', arrowFunctionResult);

/**
 * If you can write the code in a single line, you can omit the return keyword.
 * @param a
 * @param b
 * @return {*}
 */
const arrowFunctionOmitReturn = (a, b) => a + b;
console.log('Arrow Function omit return: ', arrowFunctionOmitReturn(1, 2));

/**
 * You can use the spread operator syntax to access all the passed arguments as an array.
 * @param args
 * @return {*}
 */
function restArguments(...args) {
  return args[0] + args[1];
}
const restArgumentsResult = restArguments(1, 2);
console.log('Using spread operator for function arguments: ', restArgumentsResult);


/**
 * The primary use-case is for creating generic factory functions that accept any function as input and return a new version of the function with some specific modification.
 *
 * By the way, a function that accepts a function and/or returns a function is called a higher-order function, and they are very common in JavaScript.
 * @param inputFunction
 * @return {function(...[*]): *}
 */
function log(inputFunction) {
  return function(...args) {
    console.log("Print inside log closure");
    console.log("\tInput: ", args);
    const result = inputFunction(...args);
    console.log("\tOutput result: ", result);
    return result;
  }
}
const logFunctionResult = log(arrowFunctionOmitReturn);
console.log('Logs: ', logFunctionResult(1, 2));