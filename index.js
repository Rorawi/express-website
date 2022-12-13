const express = require("express")
const bodyParser = require("body-parser")
const server = express()
const path = require("path")

const loginRequest=(req,res)=> {

    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);

    res.send("WELCOME"+" "+req.body.name )
}

server.use(express.static(path.join(__dirname, "public")))
server.use(bodyParser.urlencoded({extended:true}))

server.listen(5000,()=> console.log("Server is ready"))

server.post("/login",loginRequest)