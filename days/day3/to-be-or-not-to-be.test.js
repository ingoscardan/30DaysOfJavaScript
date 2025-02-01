import myExpect from "./day3.to-be-or-not-to-be";

describe('To Be Or Not To Be', () => {
    test('To be equal', () => {
        expect(myExpect(5).toBe(5)).toBe(true);
    });

    test('Throw Not Equal error', () => {
        expect(() => {
            myExpect(5).toBe(null)
        }).toThrow("Not Equal");
    });

    test('Not to be equal', () => {
        expect(() => {
            expect(myExpect(5).notToBe(null)).toNotBe(true);
        });
    });

    test('Throw Equal Error', () => {
        expect( () => {
                myExpect(5).notToBe(5);
        }).toThrow('Equal');
    });
});