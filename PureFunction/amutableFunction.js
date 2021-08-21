const person = Object.freeze({
    name: 'vaqef',
    friends: ['meje', 'vaqef']
});
person.name = 'yaka vaqef';
person.friends.push('shahab');
console.log(person)

// you can not change name but the problem is friens are pushing as new array

const personel = deepFreeze({
    name: 'vaqef',
    friends: ['meje', 'amin'],
    address: {
        street: 'tehransar'
    }
})

personel.address.street = 'ariashahr'
console.log(personel);

// but we can clone it
const newPersonel = {...personel, address: {...personel.address, street: '1'}}

console.log(newPersonel)

function deepFreeze(object) {
    Object.values(object).forEach(value => {
        if (value && typeof value === 'object') {
            deepFreeze(value)
        }
    });
    return Object.freeze(object);
}