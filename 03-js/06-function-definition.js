// old syntaxes

// -- syntax 1 --
console.log( sum1( 12, 13 ) ); // yes it works

// function declaration syntax - these functions are created in memory BEFORE the script executes
function sum1( x, y ) {
    const result = x + y;

    return result;
}


// -- syntax 2 --
// console.log( sum2( 12, 13 ) ); // error

// function expression syntax
// The RHS of the assignment (is an anonymous function expression)
// These functions are created just-in-time (just when this line of code executes)
const sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 12, 13 ) );


// -- syntax 3 -- 
// new syntax (ES2015) - arrow function
const sum3 = ( x, y ) => {
    return x + y;
};

console.log( sum3( 12, 13 ) );

// if you have a single line and you return something, you can simplify the code like so...
// remove both {} and the return keyword
const sum4 = ( x, y ) => x + y;

console.log( sum4( 12, 13 ) );

// single-argument function - the () optional
// const square = (x) => x * x;
const square = x => x * x;

console.log( square( 12 ) );