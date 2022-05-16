console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); //false

console.log(Object.is(null, null));
console.log(Object.is(true, true));
console.log(Object.is(NaN, NaN));
console.log(Object.is(Infinity, Infinity));

console.log(12);
console.log(0 / 0 === Infinity / Infinity);
console.log(1 / 0);
console.log(Number('pepe'));
console.log(0);
console.log(-0);

console.log(isNaN('pepe'));
console.log(Number.isNaN(Number('pepe')));
console.log(Number.isNaN('pepe'));
console.log(Number.isNaN(3 / 'pepe'));
