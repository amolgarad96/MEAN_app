const express = require('express');
const model1 = require('../models/prod1')
const cors = require('cors');


const getBatches = async (req,res) => 
{
    const mydata= await model1.find({});

    res.status(200).json({mydata});
    
}

const getList= async (req,res)=>
{
    const mydata= await model1.find({});

    res.status(200).json({mydata});
   
}

module.exports = {getBatches,getList};