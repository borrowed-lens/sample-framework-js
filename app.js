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

$("#greet").click(function() {
    $("#selector-div").hide();
    let language = $('#language').val();
    Greetr('vivek', 'prasad', language).addtoHTML('#greeting', true).setLang('es').addtoHTML('#greeting1', false);
})


// Greetr('vivek', 'prasad').addtoHTML('#greeting', true).setLang('es').addtoHTML('#greeting1', false);