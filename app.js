// Array.prototype.sample = 'hi we are here';

// let a = ['viv', 'vivi', 'gg', 'chichu'];

// function Person() {}

// Person.prototype.firstname = 'vivi';

// var vivek = new Person();

// var anotherPerson = {
//     firstname: 'vivek',
// };

// var anotherVivek = Object.create(anotherPerson);
// console.log('vivek', vivek);
// console.log('anotherVivek', anotherVivek);

// for (let prop in vivek) {
//     if (vivek.hasOwnProperty()) {
//         console.log('prop', prop);
//     }
// }

// for (let prop of a) {
//     console.log('of prop', prop);
// }

var greeting = Greetr('Vivek', 'Prasad').greet(false).setLang('es').greet(false)
console.log('Person -> greeting', greeting);
