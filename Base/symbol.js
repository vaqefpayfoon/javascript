const symb = Symbol("Name");
const person = {
    age: 25,
    [symb]: 'Vaqef'
}
console.log(person)
Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
})

console.log(JSON.stringify(person));
console.log(Object.getOwnPropertySymbols(person))