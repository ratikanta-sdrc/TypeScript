class Person{
    name: string;
    age: number;
    address: string;

    showUserDetails(){
        console.log("Name of the user: " + this.name) 
        console.log("Age of the user: " + this.age) 
        console.log("Address of the user: " + this.address) 
    }

    canVote(){
        //if age > 18, return true
    }
}
