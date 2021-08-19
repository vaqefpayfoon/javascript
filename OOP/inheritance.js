class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  constructor(name, owner) {
      //this.name = name // this line return an error because it has been used in Animal
      super(name);
      this.owner = owner;
  }
  // overwrite from parent method
  speak() {
    console.log('bark');
  }
}

class Cat extends Animal {
  constructor(name, owner) {
    super(name);
    this.owner = owner;
  }
  
}

const dog = new Dog("dog", 'vaqef');
const cat = new Cat("mio", 'negar');
cat.speak();
dog.speak();
