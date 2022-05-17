export const factorial = (num) => {
    if (isNaN(num)) {
        throw new RangeError('Not numeric valid input');
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
};
