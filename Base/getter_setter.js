const oldPerson = {
    firstName: 'vaqef',
    lastName: 'payfoon',
    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(oldPerson.fullName());

// what should we do create a propery inside of property instead of using function
// getter never gets a parameter but setter should have a parameter
const person = {
    firstName: 'vaqef',
    lastName: 'payfoon',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
}

person.fullName ='yaka vaqef';
console.log(person.fullName);

// private propert

const personUsername = {
    _username: 'vaqef.payfoon',
    get username() {
        return this._username
    },
    set username(value) {
        if (value.length > 5) {
            this._username = value;
        }
    }
}
personUsername.username ='vaqef';
console.log(personUsername.username);

const personBirthDate = {
    age: 32,
    get birthdate() {
        const date = new Date()
        return date.getFullYear() - this.age
    }
}

console.log(personBirthDate.birthdate);