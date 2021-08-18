const array = ['A', 'B', 'C', 'D'];

const person = {
    name: 'vaqef',
    age: 32,
    favoritefood: 'lazania',
    address: {
        street: '123 main st.',
        city: 'tehran'
    },
}

const [first, secend] = array;
console.log(first, secend);

function returnArray(a, b) {
    return [a + b, a * b];
}

const [sum, multiple] = returnArray(2, 4);
console.log(sum, multiple);

const { address } = person;
const { address :{street, city} } = person;
console.log(address);
console.log(street);
console.log(city);

function fullnameSeperationArray(fullname) {
    return fullname.split(' ');
}

function fullnameSeperationObject(fullname) {
    const [objFirstName, objLastName] = fullname.split(' ');
    return {
        objFirstName,
        objLastName
    }
}

const [firstName, lastName] = fullnameSeperationArray('vaqef payfoon');

console.log(firstName);
console.log(lastName);


const {objFirstName, objLastName} = fullnameSeperationObject('vaqef payfoon');

console.log(objFirstName);
console.log(objLastName);


function objectParameter(option) {
    const {a, b} = option;
    return([a + b, a * b]);
}

const [sum1, multiply1] = objectParameter({a: 2, b: 3});

console.info(sum1, multiply1);