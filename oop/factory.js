function createPerson(name, age) {
    return {
        name,
        age,
        greetings: function () {
            console.log(`Hola soy ${this.name}, y tengo ${this.age} años`);
        },
    };
}

const p1 = createPerson('Pepe', 22);
p1.greetings();
