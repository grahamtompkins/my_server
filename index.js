const express = require("express")

const app = express()

app.post("/api/time",(req,res)=>{
    console.log(req.UNPACK_MESSAGE_1)
    return res.json({})
})

app.get("*",()=>console.log("here"))

app.listen(5001,()=>console.log("started server on port 5001"))
