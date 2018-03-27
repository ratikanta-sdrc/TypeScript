//step 1


// let showUserDetails = (name, age, address) => {


//     console.log("Name of the user: " + name) 
//     console.log("Age of the user: " + age) 
//     console.log("Address of the user: " + address) 


// }
// showUserDetails("SK Azar", 28, "Bhubaneswar, Odisha, India")





//step 2
//Inline annotation

// let showUserDetails = (person: {name: string, age: number, address: string}) => {


//     console.log("Name of the user: " + person.name) 
//     console.log("Age of the user: " + person.age) 
//     console.log("Address of the user: " + person.address) 


// }
// showUserDetails({name : "SK Azar", age: 28, address: "Bhubaneswar, Odisha, India"})


//Step 3
//User of interface
//This is cleaner and can be used at multiple places
//This is where we need interface


interface IPerson{
    name: string,
    age: number,
    address: string
}


let showUserDetails = (person: IPerson) => {


    console.log("Name of the user: " + person.name) 
    console.log("Age of the user: " + person.age) 
    console.log("Address of the user: " + person.address) 


}
showUserDetails({name : "SK Azar", age: 28, address: "Bhubaneswar, Odisha, India"})
