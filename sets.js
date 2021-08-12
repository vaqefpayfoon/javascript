const uniqueList = [1, 2, 3, 4, 5, 6];
const newNumber = 4;
if (!uniqueList.includes(newNumber)) {
    uniqueList.push(newNumber);
}

console.log(uniqueList);

const set = new Set([1, 2, 3, 4, 4, 4, 4]);
// it would remove all the duplicates for us and if you add new value that it is duplicated it won't add it
set.add(1);
set.add(5);
// set[0] and set.get(2) it won't work
set.has(2);

set.delete(2);
console.log(set.entries())
console.log(set.size)
// console.log(set.clear())
set.forEach(value => {
    console.log(value)
})


function removeAllDuplicates(array) {
    return [... new Set(array)]
}

const freshArray = removeAllDuplicates([1, 2, 3, 4, 4, 5, 1]);
console.log(freshArray);
