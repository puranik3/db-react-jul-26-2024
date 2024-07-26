// Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map, reduce, some) 
 
const persons = [ 
    { 
        name: 'John', 
        salary: 1000, 
        age: 32, 
        emails: [ 
            'john@gmail.com', 
            'john@example.com' 
        ] 
    }, 
    { 
        name: 'Jane', 
        age: 28, 
        salary: 2000, 
        emails: [ 
            'jane@gmail.com', 
            'jane@example.com', 
            'jane@yahoo.com', 
        ] 
    }, 
    { 
        name: 'Mark', 
        age: 46, 
        salary: 3000, 
        emails: [ 
            'mark@gmail.com', 
            'mark@example.com' 
        ] 
    }, 
    { 
        name: 'Mary', 
        age: 44, 
        salary: 4000, 
        emails: [ 
            'mary@gmail.com', 
            'mary@example.com' 
        ] 
    } 
]; 
 
// Get a list of users along with their first email id. The result should be an array like this. Do not modify the given array. 
 
// [ 
//     { 
//          name: 'John', 
//         email: 'john@gmail.com' 
//     }, 
//     { 
//         name: 'Jane', 
//         email: 'jane@gmail.com' 
//     }, 
//     { 
//         name: 'Mark', 
//      email: 'mark@gmail.com' 
//     }, 
//     { 
//         name: 'Mary', 
//         email: 'mary@gmail.com' 
//     }
// ]