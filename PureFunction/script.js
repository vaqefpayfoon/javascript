// pure function is not modify any data and note having a side effect
// this sample is pure function return a brand new array and not having side effect to original array
const array = [1, 2, 3, 4];

function addElement(a, element) {
    return  [...a, element]
}
console.log(addElement(array, 5));
console.log(array);

const person = {
    name: 'vaqef',
    friends: ['meje', 'amin']
}

function addFriend(p, friendName) {
    return {...p, friends: addElementFriends(p.friends, friendName)}
}
function addElementFriends(a, element) {
    return [...a, element];
}

const newPerson = addFriend(person, 'shahab')
console.log(person)
console.log(newPerson)