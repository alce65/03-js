import { add } from './helper.js';
import { factorial } from './factorial/factorial.js';

let x = true;
if (x) {
    console.log('Hello World');
}

console.log(add(6, 7));

try {
    console.log(factorial('pepe'));
} catch (error) {
    console.log('Error de cálculo', error.name, error.message);
}
