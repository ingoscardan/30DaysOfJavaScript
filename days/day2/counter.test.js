import createCounter from './day2.counter'

describe('Create a counter', () => {
    test('Counter should increment by one', () => {
        const counter = createCounter(10);
        let incremental = counter();
        expect(incremental).toBe(10);
        incremental = counter();
        expect(incremental).toBe(11);
        incremental = counter();
        expect(incremental).toBe(12);
    })

});