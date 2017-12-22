interface IEss {
    score: number
}

interface IAssamHss {
    isPieChartPresent: boolean
}


interface IUser extends IEss, IAssamHss{
    name: string,
    age: number,
    single: boolean,
    say_hello(name: string): string
    
}

class Naseem implements IUser{
    name = "naseem"
    age = 27
    single = true
    score = 23
    isPieChartPresent = true

    say_hello(name : string){
        return 'Hello ' + name
    }
}

class Main1 {
    constructor(private naseem: Naseem){

        this.print_naseem_name()
    }

    print_naseem_name(){
        console.log("Name : " + this.naseem.name);
        console.log("Age : " + this.naseem.age);
    }

}

let modified_naseem = new Naseem()
modified_pratyush.age = 50

let main1 = new Main(new Naseem())

