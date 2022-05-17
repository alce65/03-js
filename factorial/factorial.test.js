import { factorial } from './factorial';

describe('Given factorial function', () => {
    describe('When it is run with 0', () => {
        test('Then it should return 1', () => {
            const result = factorial(0);
            expect(result).toBe(1);
        });
    });
    describe('When it is run with 1', () => {
        test('Then it should return 1', () => {
            const result = factorial(1);
            expect(result).toBe(1);
        });
    });
    describe('When it is run with 5', () => {
        test('Then it should return 120', () => {
            const result = factorial(5);
            expect(result).toBe(120);
        });
        describe('When it is run with 450', () => {
            let expectedResult = 1.733368733 * 10 ** 1000;
            beforeEach(() => {
                expectedResult = 1.733368733 * 10 ** 1000;
                // Math.pow(10,1000);
            });
            test(`Then it should return ${expectedResult}`, () => {
                const result = factorial(450);
                expect(result).toBe(expectedResult);
            });
        });
        describe('When it is run with -1', () => {
            test('Then it should throw an error', () => {
                expect(() => factorial(-1)).toThrow(RangeError);
            });
        });
        describe('When it is run with 1.6', () => {
            test('Then it should throw an error', () => {
                expect(() => factorial(1.6)).toThrow(RangeError);
            });
        });
        describe('When it is run with "pepe"', () => {
            test('Then it should throw an error', () => {
                // expect(factorial('pepe')).toBe(1);
                expect(() => factorial('pepe')).toThrow(RangeError);
            });
        });
    });
});
