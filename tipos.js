// Tipado debil -> tipo desde el valor
// Tipado dinámico -> tipo puede cambiar

let foo;
console.log(foo, typeof foo);
foo = 34;
console.log(foo, typeof foo);
foo = 'pepe';
console.log(foo, typeof foo);
foo = true;
console.log(foo, typeof foo);
foo = null;
console.log(foo, typeof foo);
foo = {};
console.log(foo, typeof foo);
