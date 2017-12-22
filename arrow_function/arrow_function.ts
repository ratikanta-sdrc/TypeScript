// var getRegularValue = function (){
//     return 10
// }

// console.log(getRegularValue())

// const getArrowValue = () => {
//     return 10
// }

// console.log(getArrowValue())

// const getArrowValue = () => 10


// console.log(getArrowValue())



// const getArrowValue = (m) => 10 * m


// console.log(getArrowValue(3))


// const getArrowValue = m => 10 * m


// console.log(getArrowValue(3))



// const getArrowValue = (m, bonus) => 10 * m + bonus


// console.log(getArrowValue(3, 10))

// console.log(typeof(getArrowValue))



// const getArrowValue = (m, bonus) => {

//     if(m> 2)
//         bonus *= 2

//     return 10 * m + bonus

// }


// console.log(getArrowValue(3, 10))


//This keyword problem

var employee = {
    id: 1,
    greet: function(){
        var temp = this;
        setTimeout(function(){
            console.log(temp.id)
        }, 2000)
        
    }
}

employee.greet()