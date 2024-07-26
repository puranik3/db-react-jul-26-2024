// name of the function (sum) refers to the function in memory
function sum(x, y) {
    return x + y;
}

// add and sum, BOTH, refer to the SAME function in memory
const add = sum; // add is a function

console.log( add ); 
console.log( typeof add ); // "function"

console.log( add( 12, 13 ) ); // 25