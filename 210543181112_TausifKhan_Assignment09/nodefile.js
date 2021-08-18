const fs = require("fs")
const http = require('http')
const prompt = require('prompt')
let fname = "file.txt"
prompt.start()
console.log("Enter the data")
prompt.get(['data'],(err,res)=>{
    fs.writeFile(fname,res.data,(err)=>{
        if(err) throw err;
        console.log("Data written successfully")
    })
})
const server = http.createServer((req,res)=>{
    fs.readFile(fname,(err,data)=>{
        if(err) throw err
        res.write(data.toString())
        res.end()
    })
})

server.listen(1000)