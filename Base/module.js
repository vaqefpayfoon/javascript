const symb = Symbol("Name");
export const person = {
    age: 25,
    [symb]: 'Vaqef'
}
console.log(person[symb])