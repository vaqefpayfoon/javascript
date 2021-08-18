function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printName = function() {
        console.log(this.name);
    }
}

Person.prototype.printAge = function() {
    console.log(this.age)
}
const person = new Person('vaqef', 32);
const person2 = Object.create(person);
person.name = 'payfoon';
const person3 = Object.assign({}, person)
person3.name = 'negar';
person3.age = 29
console.log(person === Object.getPrototypeOf(person2))
console.log(person.name); // payfoon
console.log(person2.name); // payfoon
console.log(person3.name); // negar


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.name = 'Jane'; // disconnected

copiedPerson.age = 29;

console.log(person);
console.log(copiedPerson);

person.printAge(); //it does not work for person3 or copiedPerson because they didn't get instance

// static
Person.staticName = 'yaka';
Person.staticMethod = () => {
    console.log('static method');
}
Person.staticMethod();
console.log(Person.staticName)
