const fs=require("fs")
const http=require('http')
const PORT=2000
const Host ="localhost"
const server = http.createServer((req,res)=>{
    if(req.url == '/')
    {
        fs.readFile("home.html",(err,data)=>{
            if(err) throw err
            res.write(data.toString())
            res.end()
        })
    }
    else if(req.url == '/employee')
    {
        fs.readFile("simple_horizontal.html",(err,data)=>{
            if(err) throw err
            res.write(data.toString())
            res.end()
        })
    }
    else{
        res.write("Page not Found")
        res.end()
    }
})

server.listen(PORT)