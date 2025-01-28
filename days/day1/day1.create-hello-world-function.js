/**
 * PROBLEM STATEMENT
 *      - Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

export default function createHelloWorld() {
    return function(...args) {
        return 'Hello World';
    }
}