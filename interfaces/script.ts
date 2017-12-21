var msg:string="Hello world!"
document.write(msg)
var any:any[]=[2,"er"]
enum myenum{
    height = 8,
    width = 4
}
console.log("area = "+myenum.height*myenum.width+" sq mtr")
function addNums(num1:number, num2:number):number{
    return num1+num2
}
console.log("addition is: "+addNums(8,4))


interface player{
    run():void,
    addLives(n:number):void
    score():number
}
function createplayer():player{
    return{
        run: function(){
            console.log("inside run method.")
        },
        addLives: function(n:number){
            console.log("inside add lives function and the parameter passed is: "+n)
        },
        score: function(){return 4}
    }
}
createplayer().run()
createplayer().addLives(445)
console.log("calling createPlayer function: "+createplayer().score())