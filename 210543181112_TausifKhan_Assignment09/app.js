const prompt = require('prompt')//Import
const m = require("./calculate.js")
prompt.start()//Prompt Start
console.log("Enter the number")
prompt.get(['n1','n2'],(err,res)=>{
    if(err)
        throw err
    console.log("Addition is = "+m.Addition(res.n1,res.n2))
    console.log("Subtraction is = "+m.Subtraction(res.n1,res.n2))
    console.log("Multiplication is = "+m.Multiplication(res.n1,res.n2))
    console.log("Division is = "+m.Division(res.n1,res.n2))
})//Read Prompt data,Promt argument consist of varible and call back function