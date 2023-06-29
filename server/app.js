const express = require('express');
const app = express();
port =5100;
const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/Infosystem';

const connectDB = () =>
{

   return mongoose.connect(URL)
}
connectDB();
module.exports = connectDB;
