const express = require("express")

const app = express()

app.post("/api/time",(req,res)=>{
    console.log(req.body.time)
    return res.json({})
})

app.listen("localhost:5000",()=>console.log("connected"))