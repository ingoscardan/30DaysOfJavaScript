import createHelloWorld from "./day1.create-hello-world-function";


describe('createHelloWorld', () => {
   test('Should return a function if function is not called', () => {
      const helloWorld = createHelloWorld();
      expect(typeof helloWorld).toBe('function');
   });
   test('Should return "Hello World! as the function is called', () => {
      const helloWorld = createHelloWorld()();
      expect(helloWorld).toBe('Hello World');
   });
})