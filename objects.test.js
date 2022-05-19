import { push } from './objects';

describe('Given push function', () => {
    test('it should throw an error if not array', () => {
        // arrange
        const arr = '';
        const item = '';
        // act & assert
        expect(() => {
            push(arr, item);
        }).toThrow('El input debe ser tipo array');
    });
    test('it should return an array lenght  + 1', () => {
        // arrange
        const arr = [];
        const item = 1;
        // act
        const result = push(arr, item);
        // assert
        expect(result).toBe(arr.length);
    });
});
