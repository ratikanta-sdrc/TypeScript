
//One limitation
// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }

//     return x;//dangerous
// }
// console.log(f(true));  // returns '10'
// console.log(f(false));


// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         let x = 10;
//     }

//     return x;//dangerous
// }

// console.log(f(true));  // returns '10'
// console.log(f(false));

//not showing error declare variable multiple times
// function sumMatrix() {
//     var sum = 0;
//     var row = 5
//     var column = 10
//     for (var i = 0; i < row; i++) {        
//         for (var i = 0; i < column; i++) {
//             sum++;
//         }
//     }
//     return sum;
// }

// console.log(sumMatrix())//expected 50, will get 5

for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}