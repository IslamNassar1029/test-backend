const express = require('express')
const mongoose = require("mongoose")
const morgan = require('morgan')
const dotenv = require('dotenv')
require("dotenv").config()
const { API_PORT } = process.env;
const portNumber = process.env.API_PORT || API_PORT;
const { dataBaseURl } = process.env;
const app = express();
const userRouter = require('./routers/user')
const buyingRouter = require('./routers/buy')
const auth = require ('./middlewares/auth')

app.use(express.json())
app.use(morgan('combined'))
app.use('/buy',auth,buyingRouter)

app.use('/user',userRouter)


mongoose.connect('mongodb://127.0.0.1:27017/login',(err)=>{
    if(!err) return console.log(`Successfully connected to database`)
    console.log("database connection failed. exiting now...");
})

app.listen(portNumber,(err)=>{
    if(!err) return console.log(`server starts on port ${portNumber}`);
    console.log(err)
})