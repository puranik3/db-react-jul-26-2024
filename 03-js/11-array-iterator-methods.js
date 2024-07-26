// array methods
// iterator methods - a set of methods that are very similar

const persons = [
    { name: 'John', points: 500 },
    { name: 'Jane', points: 1000 },
    { name: 'Mark', points: 1500 },
]

// forEach()
// like a for loop
// the iterator function is called for each item of the array, and the item is passed as an argument
persons.forEach( ( item, idx ) => console.log( idx, item.name ) );
persons.forEach( item => { item.points += 250 } );

console.log( persons );

// map()
// you want to get a new array from an existing array, where evry item has an corresponding item at the same position
// [ 'John', 'Jane', 'Mark' ]
const personNames = persons.map( item => item.name );
console.log( personNames );
