const express = require("express")
const app = express()
const port = 3035

app.get("/", (req,res) => {
    res.send("hola mundo")
}) 

app.listen(port, () =>{
    console.log ("Mi puerto es "+ port)
})
