const prompt = require('prompt')//Import
const m = require("./prime.js")
prompt.start()//Prompt Start
console.log("Enter the number")
prompt.get(['n1'],(err,res)=>{
    if(err)
        throw err
    console.log(m.prime_num(Number(res.n1)))
})//Read Prompt data,Promt argument consist of varible and call back function