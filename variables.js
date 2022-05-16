/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */

// Hoisting

console.log(x);
var x = 9;
console.log(x);
// ES6+
// ERROR console.log(y);
let y;
console.log(y);
const foo = 0;
y = 0;

// Ambito

{
    var a = 22;
    console.log(a);
}
console.log(a);

function name() {
    var z;
}

// ERROR console.log(z);

let aData = [212, 8, 506];
let sGreetings = 'hello';

console.log(aData[0]);
console.log(sGreetings[0]);
aData[0] = 0;
console.log(aData);
// ERROR sGreetings[0] = 'w';
console.log(sGreetings);

let fifty = 50;
console.log(fifty.toPrecision(4));
console.log(fifty);

// ERROR fifty.shades = 'gray';
