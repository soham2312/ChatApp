const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data');
const cors = require('cors');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./Routes/Userroutes');
const port = process.env.PORT || 5000;

const app = express();
dotenv.config();
connectDB();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("API is running")
});
app.use('/api/user',userRoutes);
app.use(express.json());
app.get('/api/chats',(req,res)=>{
    res.send(chats)
});

app.get('/api/chats/:id',(req,res)=>{
    const chat = chats.find(c=>c._id === req.params.id);
    res.send(chat)
});

app.listen(port, () => console.log(`Server is running on port ${port}`.yellow.bold));
