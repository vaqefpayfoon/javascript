const people = [
    {
        name: 'amin',
        friends: ['meje', 'omid']
    },
    {
        name: 'negar',
        friends: ['vaqef', 'omid']
    },
    {
        name: 'mehry',
        friends: ['omid', 'vaqef']
    }
]

const result = groupBy(people, person => person.friends);
console.log(result)

function groupBy(array, func) {
    return array.reduce((grouping, element) => {
        const key = func(element);
        if (grouping[key] == null) {
            grouping[key] = [];
        } else {
            grouping[key].push(element)
        }
        return grouping;
    }, {})
}

const key = "name";
const find = people.filter(x => x.name === 'amin')
for (p of find) {
    console.log(p[key])
}


const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}