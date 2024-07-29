function add( x ) {
    // let z;

    // Within one function you can create other function
    // It is a local function - the function is created when the outer function (add) is called
    // we are returning a function
    return function( y ) {
        return x + y;
    }
}

const f = add( 10 ); // add is called and it completes executon and returns the inner function
console.log( f );
console.log( typeof f ); // "function"

const result = f( 20 ); // x is still in memory, and hence f works
console.log( result );