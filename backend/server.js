const express = require("express");
const chats = require("./data/data");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes');
const chatRoutes=require('./routes/chatRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const app =express();
dotenv.config();
connectDB();

app.use(express.json()); //to accept JSON Data


app.get('/', (req,res)=>{
    // res.send(chats);
    console.log("API Connecteed successfully".yellow.bold);
});

// app.get('/api/user', (req,res)=>{
//     // res.send(chats);
//     console.log("API Connecteed successfully".yellow.bold);
// });

var cors = require('cors')

app.use(cors())

app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(5000, console.log(`Server started on PORT ${PORT}`));