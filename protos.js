/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
const mammal = {
    brainy: true,
};

const human = {
    teeth: 32,
    __proto__: mammal,
};

const gwen = {
    age: 22,
    __proto__: human,
};

const mary = Object.create(human);
mary.age = 25;

console.log(gwen.teeth, gwen);
console.log(mary.teeth, mary);
console.log(gwen.__proto__);

console.log(gwen.brainy);

gwen.teeth = 30;
console.log(gwen.teeth, gwen);
console.log(gwen.__proto__.teeth);
console.log(mary.teeth, mary);

console.log(mammal.hasOwnProperty('brainy'));
console.log(mary.hasOwnProperty('brainy'));
console.log(mary.hasOwnProperty('age'));

console.log('Fin', mary.hasOwnProperty);

let foo = {
    __proto__: null,
};
console.log(foo.hasOwnProperty);

mammal.__proto__.taste = 'pineapple';
console.log(gwen.taste);
mary.taste = 'sweet';
console.log(mary.taste);
