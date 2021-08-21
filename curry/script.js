import { curry } from 'lodash/fp'
function sum(a) {
    return b => {
        return a + b
    }
}

console.log(sum(2)(3));

function sumBind(a, b) {
    return a + b;
}

// console.log(sumBind.bind(null, 2)(3));

console.log(curry(sumBind(1)(2)))