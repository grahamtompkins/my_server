const express = require("express")

const app = express()

app.post("/api/time",(req,res)=>{
    console.log(req.body.time)
    return res.json({})
})

app.get("*",()=>console.log("here"))

app.listen(5000,()=>console.log("started server on port 5000"))