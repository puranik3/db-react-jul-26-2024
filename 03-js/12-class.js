// all data memebrs are public
// inheritance also there
class Person {
    // name;
    // age;

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday( changeBy ) {
        this.age += changeBy;
    }
}

const john = new Person( 'John', 32 );
const jane = new Person( 'Jane', 28 );

john.celebrateBirthday( 10 );
jane.celebrateBirthday( 14 );

console.log( john );
console.log( jane );