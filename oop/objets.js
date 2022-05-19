/* eslint-disable no-unused-vars */
const alumno = {
    curso: 'JS',
};

const foo = {
    __proto__: alumno,
    name: 'Pepe',
    age: 23,
    greetings: function () {
        console.log(`Hola soy ${this.name}, y tengo ${this.age} años`);
    },
};

foo.name = 'Jose';
foo.height = 180;
// delete foo.age;

foo.greetings();
console.log(foo, foo.curso);

const bar = {
    __proto__: alumno,
    name: 'Maria',
    age: 25,
    greetings: function () {
        console.log(`Hola soy ${this.name}, y tengo ${this.age} años`);
    },
};

bar.greetings();
console.log(bar, bar.curso);
