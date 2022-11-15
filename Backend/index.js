const express=require("express")
const cors=require("cors")
const { application } = require("express")

app.use(express.json())
app.use(cors.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Our Asxiy,uz API...")
})

app.listen(5000,console.log("Server running on port 5000"))