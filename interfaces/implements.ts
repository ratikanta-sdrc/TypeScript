interface IUser{
    name: string,
    age: number,
    single: boolean,
    say_hello(name: string): string
}

class Pratyush implements IUser{
    name = "pratysuh"
    age = 27
    single = true

    say_hello(name : string){
        return 'Hello ' + name
    }
}

class Main {
    constructor(private pratyush: Pratyush){

        this.print_pratyush_name()
    }

    print_pratyush_name(){
        console.log("Name : " + this.pratyush.name);
        console.log("Age : " + this.pratyush.age);
    }

}

let modified_pratyush = new Pratyush()
modified_pratyush.age = 50

let main = new Main(new Pratyush())

