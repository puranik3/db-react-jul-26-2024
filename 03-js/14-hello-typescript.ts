// primitive types
let price : number;

price = 100;
price = 99.95;

// price = 'hello'; // error

// type inference - TS infers the data type from the initial value
let isRaining = true;
// isRaining = 123; // error

let message = 'Hello, world';

let x; // any type
x = 100;
x = 'Hello';
x = true;
x = {
    name: 'I am X'
};
x = [ 1, 2, 3 ];

// union type
let chequeAmount : number | string = 10000;
chequeAmount = 'Twenty thousand';
// chequeAmount = false; // error

// type literals
let rating : 1 | 2 | 3 | 4 | 5 = 1;
// rating = 6; // error
rating = 5;

// arrays
const primes : (number | string)[] = [ 2, 3, 5, 7, 11 ];
// primes = [ 2, 3, 5, 7, 11, 13 ]; // not possible in const array
// ++primes[0]; // is possible in const array
primes.push( 'Thirteen' );

// objects
const john = {
    name: 'John',
    age: 32
};

// type alias
type Person = { name: string, age: number, spouse?: string };

let jane : Person;

jane = {
    name: 'Jane',
    age: 28
};

jane.spouse = 'John';
// jane.email = 'jane@db.com'; // error

// 2 syntaxes for function typing
// syntax 1 - provide the types along with the arguments
function sum( x : number, y : number ) /* : number */ {
    return x + y;
}

// syntax 2 - provide the types separately (not along with the function definition)
// applicable only for function expression - const f = function() {} / const f = () => {}
type BinaryFunction = ( x : number, y : number ) => number;

const multiply : BinaryFunction = function( x, y ) {
    return x * y;
};

// interface - 2 use cases - 1. give type for object, 2. provide guarantee on a class having a set of methods (can also be data members)
interface IPerson {
    name: string,
    age: number,
    spouse?: string,
    celebrateBirthday: ( changeBy ) => number // void
}

const mark : IPerson = {
    name: 'Mark',
    age: 40,
    celebrateBirthday( changeBy : number ) {
        this.age += changeBy;
        return this.age;
    }
};

mark.celebrateBirthday( 10 );

class Human implements IPerson {
    name : string;
    age: number;

    constructor( name : string, age : number ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday( changeBy : number ) {
        this.age += changeBy;
        return this.age;
    }
}
