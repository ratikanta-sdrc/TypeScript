// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "Mama", lastName: "Panda" };

// console.log(greeter(user))


//Optional Properties

interface Person {
    firstName: string;
    lastName?: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName
}

let user = { firstName: "Mama" }

console.log(greeter(user))