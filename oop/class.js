class Person {
    static hasBrain = true;

    static isAlive = function () {
        return 'Estoy vivo';
    };
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name;
    }
    // set name(value) {
    //     this._name = value;
    // }
    planet = 'Tierra';
    greetings() {
        console.log(
            `Hola soy ${this.#name}, y tengo ${this.#age} años y ` +
                Person.isAlive()
        );
    }
}

const p1 = new Person('Pepe', 23);
const p2 = new Person('Luisa', 25);

p1.greetings();
p2.greetings();

console.log(p1.planet);
console.log(p2);
console.log(Person.hasBrain);

class Alumno extends Person {
    course;
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    greetings() {
        super.greetings();
        console.log('Soy el alumno ', this.name);
        console.log('Estudio ' + this.course);
    }
}

const a1 = new Alumno('Luisa', 25, 'FullStack');
console.log(a1);
a1.greetings();
