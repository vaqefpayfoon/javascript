// call and apply work like bind

window.name = 'global name';
const person = {
    name: 'vaqef'
}
function printName() {
    console.log(this.name);
}
printName();

// the only defrence between call and apply is wen you are passing parameter
printName.apply(person)
printName.call(person)

function sum(a, b) {
    return a + b;
}

//calling that function again with 3
// console.log(sum.bind(null, 2)(3)) // => 5
// console.log(sum.call(null, 2, 3)) // => 5
// console.log(sum.apply(null, [2, 3])) // => 5

const numbersToAdd = [1, 2, 3, 4, 5];
function adddArrayOfNumbers(...numbers) {
    return numbers.reduce((count, number) => count + number)
}

console.log(adddArrayOfNumbers.call(null, 2, 3, 10))
console.log(adddArrayOfNumbers.apply(null, [4, 5]))