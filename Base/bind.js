// every function in javascript has bind function

window.name = 'global name';
const person = {
    name: 'vaqef'
}
function printName() {
    console.log(this.name);
}
printName();
// with this line we are cvreating a brand new function
const newPrintName = printName.bind(person)
newPrintName();


function sum(a, b) {
    return a + b;
}
const newSum = sum.bind(null, 2);
console.log(newSum(7));

function product(a, b) {
    return a * b;
}

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(number => {
    return product(2, number);
})
console.log(newNumbers);
const copyNumbers = numbers.map(product.bind(null, 2));
console.log(copyNumbers);