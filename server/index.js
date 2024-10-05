const express=require('express');
const cors=require('cors');
const connectdb = require('./config/db');
const router=require("./Routes/user")
require("dotenv").config()
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api", router)
const PORT=8080||process.env.PORT
connectdb().then(()=>{
    app.listen(PORT, ()=>{
        console.log('Connected to MongoDB');
        console.log('listening on port',PORT);
        })
});

//binwalharihar Harihar@12