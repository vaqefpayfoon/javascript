
function sum(arr) {
  const reducer = (sum, val) => sum + val;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue);
}

 // console.log(sum([1, 3, 5, 7])); // 16

const lineItems = [
  { description: "Eggs (Dozen)", quantity: 1, price: 3, total: 3 },
  { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
  { description: "Butter", quantity: 2, price: 6, total: 12 },
];
const result = lineItems.reduce((sum, li) => sum + li.total, 0);
console.log(result);

const find = [1, 4, 7, 9];
// console.log(find.some((x) => x === 20));


function sumReducer(value, ...numbers) {
    return numbers.reduce((sum, numbers) => sum + numbers, 0)
}
console.log(sumReducer(3, 4, 6));
// console.log(sumReducer([3, 4, 6])); wrong

function concatName(firstName, lastName) {
  console.info(firstName + ' ' + lastName);
}
const names = ['vaqef', 'payfoon']
concatName(...names);


const numberArray = [1, 4, 7];

const newArray = [...numberArray];
console.info(newArray);


//this will not give us array this is node list
const divs = document.querySelectorAll('div');
console.log(divs);

// below code throw you an error because its not an array
//divs.map(div => console.log(div))
//but if you converted to spread operator
[...divs].map(div => console.log(div));

const array = ['vaqef', 'payfoon', 'vaghef', 'peyfoon']

const [first, secend, ...rest] = array;
console.log(first, secend, rest)


const person = {
  firstNameP: 'vaqef',
  lastNameP: 'payfoon',
  cellPhoneP: '9306885757',
  addressP: {
    cityP: 'tehran',
    streetNameP: 'laleh'
  }
}

const obj = {firstNameP, lastNameP, ...restP} = person;
console.log(firstNameP, lastNameP, restP);