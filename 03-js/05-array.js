let arr = [ 1, 2, 3, 'Four' ];
console.log( 'arr = ', arr );

console.log( 'arr[0] = ', arr[0] );
console.log( 'number of items = ', arr.length ); // 4

console.log( 'last index = ', arr.length - 1 ); // 3
console.log( 'arr[arr.length - 1] = ', arr[arr.length - 1] ); // 'Four'

console.log( 'arr[arr.length] = ', arr[arr.length] ); // error / no error -> undefined

// arrays are sparse
arr[arr.length + 100] = 'Index 104';

console.log( 'arr = ', arr );

// useful methods
let primes = [ 2, 3, 5, 7, 11, 13, 17, 19 ];
primes.push( 23 );

console.log( 'primes = ', primes );

const resultOfPop = primes.pop();
console.log( 'resultOfPop = ', resultOfPop );
console.log( 'primes = ', primes );

// starting from index 2, we want to remove 3 items
const resultOfSplice = primes.splice( 2, 3, 'Five', 'Seven', 'Eleven' );
console.log( primes );
console.log( 'resultOfSplice = ', resultOfSplice );