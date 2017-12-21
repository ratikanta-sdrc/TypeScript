
let isDone: boolean = true

let age: number = 28

let weight: number = 70.56

let organizationName : string = "SDRC"

let demoArray:  [number] = [1,2]

console.log(demoArray)

enum Color { Red, Green, blue}

console.log(Color.blue)

enum Color1 { Red = 1, Green, blue}

console.log(Color1.blue)

enum Color2 { Red = 1, Green=3, blue}

console.log(Color2.blue)

let a: any = true;
let b: any = 1;
let c: any = 'SDRC';
let d: any[] = [true, 1, 'SDRC'];

//Type assertion

let message;

message = 'SDRC';

let value : string = (<string>message).substring(2);
console.log("value -> ", value)
// (message as string).endsWith('C');



