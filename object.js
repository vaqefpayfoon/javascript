const propertyName = 'name';
const index = 1;
const fName = 'Vaqef';
const age = 25;

const person = {
    [propertyName]: fName,
    [`age ${index}`]: age,
    sayHi() {
        console.log('hey')
        alert('hoy')
    }
}
// person.sayHi();
// console.log(person);

function greeting (
    firstName,
    lastName,
    {suffix, guest},
    salutation,
    fullName = `${firstName} ${lastName}`) {
    //how set default value in here
    salutation = salutation || 'hi';
    console.log(`${firstName}, ${lastName}, ${salutation}`, fullName, suffix, guest);
}
greeting('vaqef', 'payfoon', {suffix: 'Mrs', guest: 'nanash'});
// if you wanna use default value in parameters still you have to send an empty object to function other wise you get an error
greeting('vaqef', 'payfoon', {});