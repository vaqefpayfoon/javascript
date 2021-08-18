// java script convert this class to a function exactly like previous sample
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name)
    }

    static printHi() {
        console.log('Hi')
    }

    static goodName = 'Vaghef'
}

const person = new Person('vaqef', 32);
person.printName();

// 2 ways of using static
Person.staticName = 'yaka';
Person.staticMethod = () => {
    console.log('static method');
}
Person.staticMethod();
console.log(Person.staticName)

Person.printHi()
console.log(Person.goodName)