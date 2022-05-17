import { add } from './helper';

describe('function add', () => {
    test('run with 1,2 should return 3', () => {
        expect(add(1, 2)).toBe(3);
    });
});
