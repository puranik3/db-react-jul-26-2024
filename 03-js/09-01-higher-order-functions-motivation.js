function sumArray( arr ) {
    let result = 0;

    for( let i = 0; i < arr.length; ++i ) {
        result = result + arr[i];
    }

    return result;
}

function sumSquaresArray( arr ) {
    let result = 0;

    for( let i = 0; i < arr.length; ++i ) {
        result = result + arr[i] * arr[i];
    }

    return result;
}

function sumCubesArray( arr ) {
    let result = 0;

    for( let i = 0; i < arr.length; ++i ) {
        result = result + arr[i] * arr[i] * arr[i];
    }

    return result;
}

console.log( sumArray( [ 1, 2, 3, 4 ] ) ); // 10
console.log( sumSquaresArray( [ 1, 2, 3, 4 ] ) ); // 30
console.log( sumCubesArray( [ 1, 2, 3, 4 ] ) ); // 100