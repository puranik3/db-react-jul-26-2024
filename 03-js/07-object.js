// can we define an object without creating a class?
// object literal syntax - creating an object without an explicit class
const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@db.com'
    ],
    address: {
        city: 'Mumbai',
        area: 'Andheri'
    },
    // celebrateBirthday: function( changeBy ) {
    //     this.age = this.age + changeBy;
    // }
    celebrateBirthday( changeBy ) {
        this.age = this.age + changeBy;
    }
};

console.log( john.name );
console.log( john.emails[1] );
console.log( john.address.city );

// Even with john being const, age is still mutable (can be changed). You cannot assign to the john variable though.
john.age = 33;

// error - reassignment
// john = {
//     name: 'John',
//     age: 33
// }

// you can add new properties - object are a dynamic bag of properties
john.spouse = 'Jane';
john.celebrateBirthday( 10 );

console.log( john ); // spouse is also present