// Mainly 3 primitive data types - number, boolean, string
// all data typing is implicit
let x = 1;
let weight = 79.5;

// numbers
console.log( 'typeof x = ', typeof x );
console.log( 'typeof weight = ', typeof weight ); 'number'

let isRaining = true;
console.log( 'isRaining = ', isRaining );
console.log( 'typeof isRaining = ', typeof isRaining ); // 'boolean'

let name = 'John', greeting = "Hello", message1 = greeting + ' ' + name + '!';
console.log( message1 );

// ES2015 -> version 6 of JS
const message2 = `${greeting} ${name}!`;
console.log( message2 );
console.log( greeting.length );