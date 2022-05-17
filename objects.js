const p = {
    user: 'pepe',
    age: 32,
};

let prop = 'user';
console.log(p[prop]);
prop = 'age';
console.log(p[prop]);
prop = 'tutututu';
console.log(p[prop]);

console.log(p.tututu?.otra);

const aData = [];

aData.push(1);
aData.map((item) => item * 2);

function push(array, item) {
    array[array.length] = item;
    return array.length;
}

console.log(push(aData, 34));
console.log(aData);
