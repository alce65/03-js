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

export function push(array, item) {
    if (!Array.isArray(array)) {
        throw new Error('El input debe ser tipo array');
    }

    array[array.length] = item;
    return array.length;
}

console.log(push(aData, 34));
console.log(aData);

let president = {
    name: 'Pooh',
};

president.next = {
    name: 'Pad',
    next: president,
};

console.log(president);

let president2 = {
    name: 'Juan',
    // next: president2,
};
president2.next = president2;
console.log(president2);

const noMutar = (obj) => {
    // (obj.name = 'maria');
    // let temp = { ...obj };
    let temp = structuredClone(obj);
    temp = JSON.parse(JSON.stringify(obj));
    temp.name = 'maria';
    return temp;
};

const original = {
    name: 'pepe',
    age: 22,
};

console.log(noMutar(original));
console.log(original);
