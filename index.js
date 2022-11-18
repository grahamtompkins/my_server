const express = require("express")

const app = express()

let prev_time = 0;

app.post("/api/time",(req,res)=>{
    if(prev_time){
      console.log((new Date().getTime() - prev_time)/1000)
    }
    prev_time = new Date().getTime()
    return res.json({})
})

app.get("*",()=>console.log("here"))

app.listen(5001,()=>console.log("started server on port 5001"))
