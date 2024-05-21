const express = require("express");
const chats = require("./data/data");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes')


const app =express();
dotenv.config();
connectDB();




app.get('/', (req,res)=>{
    // res.send(chats);
    console.log("API Connecteed successfully".yellow.bold);
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(5000, console.log(`Server started on PORT ${PORT}`));