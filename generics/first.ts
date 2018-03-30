/**
 * This method is going to DO SOME LOGICAL OPERATIONS and WRITE DATA TO A FILE
 * @param data Which we want to write to a file
 * @returns modifiedData This method will return modified data after application of logic  
 */

function writeToFile1<T>(data: T): T{

    let modifiedData = data;

    //code for doing some logical operation...

    //code for writing to a file

    return modifiedData

}

let x = writeToFile1<number>(25) //now check type of x
let y = writeToFile1<string>('SDRC') //now check type of x

