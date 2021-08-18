const CURRENCY_MAP = {
    'United States': 'USD',
    India: 'Rupee'
}
const currency = CURRENCY_MAP['India']
//it has error const currency2 = CURRENCY_MAP[India]
const currency3 = CURRENCY_MAP['United States']
// console.log(currency3)

const CURRENCIES = [
    {name: 'USD', country: 'United States'},
    {name: 'Rupee', country: 'India'}
]

var findCurrency = CURRENCIES.find(c => c.country === 'United States1');
// console.log(findCurrency || 'peyda nashod');

const map = new Map(
    [
        ["United States", "USD"],
        ["India", "Rupee"],
        [{a: 1}, false]
    ]
)
// console.log(map)

const user = {
    name: 'Vaqef'
}

const userMap = new Map(
    [
        [user, {age: 32}]
    ]
)
// map work like dictionary in c# it has key and value but definition is two array 
// console.log(userMap.get(user));
// it can be used variable just like objects too

const variable = new Map(
    [
        [1, "A"],
        [2, "B"],
        [3, "C"],
        [4, "D"],
    ]
)
variable.forEach((value, key) => {
    console.log(value, key);
})

console.log(variable.size);
console.log(variable.set(3, 'vaqef'));
console.log(variable.get(3));
console.log(variable.has(6));
console.log(variable.keys());
console.log(variable.entries());
console.log(variable.delete(2));
console.log(variable.values());
// set can be used as add and update
console.log(variable.set(6, 'yaka'));

// console.log(variable.clear());

// for to do this work in object its gonna be harder
const objects = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}
Object.entries(objects).forEach((key, value) => {
    // console.log(key, value)
})