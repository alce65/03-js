function foo() {
    console.log('This vale:', this);
}

const obj = {
    name: 'BJ',
    method: foo,
};

// Patrón function

foo();

// Patrón method
obj.method();

// Patrón constructor

new foo();
