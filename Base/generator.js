// a generator function use when you want to return multiple values

function * simpleGenerator() {
    console.log('befor1')
    yield 1
    console.log('after1')
    console.log('befor2')
    yield 2
    console.log('after2')
    console.log('befor3')
    yield 3
    console.log('after3')
};
// const generator = simpleGenerator();
// generator.next()
// generator.next()
// generator.next()

function* fibonacciGenerator() {
    let prevOne = 0
    let prevTwo = 1

    yield 0
    yield 1

    while (true) {
        let result = prevOne + prevTwo
        yield result
        prevOne = prevTwo
        result = prevTwo
    }
}
// let generator = fibonacciGenerator();
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())


function* idGenerator() {
    let count = 1;
    while (true) {
        yield count++
    }
}
// const generator2 = idGenerator();
// console.log(generator2.next());
// console.log(generator2.next());
// console.log(generator2.next());
// console.log(generator2.next());
// console.log(generator2.next());


function* idIncrement() {
    let count = 1;
    while (true) {
        let incrementor = yield count
        if (incrementor != null) {
            count += incrementor
        } else {
            count++
        }
    }
}

const generatorInc = idIncrement();
console.log(generatorInc.next());
console.log(generatorInc.next(2));
console.log(generatorInc.next());