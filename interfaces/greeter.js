// interface Person {
//     firstName: string;
//     lastName: string;
// }
function greeter(person) {
    return "Hello, " + person.firstName;
}
var user = { firstName: "Mama" };
console.log(greeter(user));
