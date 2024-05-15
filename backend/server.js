const express = require("express");
const app = express()
const PORT = 4000;

app.post("/api/users",(req,res)=>{
    console.log("Hello World");
})

app.listen(PORT,()=>{
    console.log("Server is running at port "+PORT);
})