import { strictEquals } from './strictEquals';

// | A       | B     | RESULT |                   |
// | ------- | ----- | ------ | ----------------- |
// | 1       | 1     | true   |                   |
// | NaN     | NaN   | false  | // Rule Exception |
// | 0       | -0    | true   | // Rule Exception |
// | -0      | 0     | true   | // Rule Exception |
// | 1       | "1"   | false  |                   |
// | true    | false | false  |                   |
// | false   | false | true   |                   |
// | "Water" | "oil" | false  |

describe('Given the function strictEquals ', () => {
    let results;
    beforeAll(() => {
        results = [false, true];
    });
    describe('When receive 1, 1', () => {
        test('Then should be true', () => {
            // Arrange
            const initials = [1, 1];
            // Act
            const result = strictEquals(...initials);
            // Assert;
            expect(result).toBe(results[1]);
        });
    });
    describe('When receive NaN, NaN', () => {
        test('Then should be false', () => {
            // Arrange
            const initials = [NaN, NaN];
            // Act
            const result = strictEquals(...initials);
            // Assert;
            expect(result).toBe(results[0]);
        });
    });
    describe('When receive 0, -0', () => {
        test('Then should be true', () => {
            // Arrange
            const initials = [0, -0];
            // Act
            const result = strictEquals(...initials);
            // Assert;
            expect(result).toBe(results[1]);
        });
    });
    describe('When receive -0, 0', () => {
        test('Then should be true', () => {
            // Arrange
            const initials = [-0, 0];
            // Act
            const result = strictEquals(...initials);
            // Assert;
            expect(result).toBe(results[1]);
        });
    });
});
