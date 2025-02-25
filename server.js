const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config();
const rest=require('./schema')
const menu=require('./schema')

app.use(express.json())

const URI=process.env.URI;
const PORT=process.env.PORT;

mongoose.connect(URI)
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((error)=>{
    console.log("Failed to connect",error)
})

app.get('/',(req,res)=>{
    return res.send("Welcome")
});

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})