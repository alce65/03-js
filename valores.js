console.log(34, typeof 34);
console.log(-34, typeof -34);
console.log(3.4, typeof 3.4);
console.log(Number.MAX_SAFE_INTEGER);

console.log('pepe', typeof 'pepe');
console.log('❤️', typeof '❤️');
console.log(`pepe`, typeof `pepe`);
console.log('', typeof '');

console.log(true, typeof true);
console.log(false, typeof false);

console.log(undefined, typeof undefined);

console.log(null, typeof null); // Por error retorna object

console.log(500_000_000_000_000_000_000n, typeof 5n);

console.log(Symbol(), typeof Symbol());

console.log([], typeof []);
console.log({}, typeof {});
console.log(/a/, typeof /a/);
console.log(new Date(), typeof new Date());
console.log(new Error(), typeof new Error());
console.log(() => {}, typeof (() => {}));

[].map((item) => item);
'PEPE'.toLowerCase();
true.valueOf();
