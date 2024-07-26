function sumArray( arr, fn ) {
    let result = 0;

    for( let i = 0; i < arr.length; ++i ) {
        result = result + fn( arr[i] );
    }

    return result;
}

const cube = x => x * x * x;

// arr = [ 1, 2, 3, 4 ], fn = cube
console.log( sumArray( [ 1, 2, 3, 4 ], cube, 'cube' ) ); // 100

// instead of creating a function above and passing it, you can create it and pass it in one go

// fn = x => x
console.log( sumArray( [ 1, 2, 3, 4 ], x => x, 'sum' ) ); // 10

// fn = x => x * x
console.log( sumArray( [ 1, 2, 3, 4 ], x => x * x, 'square' ) ); // 30

console.log( sumArray( [ 1, 2, 3, 4 ], Math.sqrt ) );
console.log( sumArray( [ 1, 2, 3, 4 ], Math.log ) );
