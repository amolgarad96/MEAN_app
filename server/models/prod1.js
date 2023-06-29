const mongoose = require('mongoose');
const productSchema =new mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Fees:{
        type: Number,
        required:true,
    },
    Duration :{
        type: String,
        required: true,
    }
})

module.exports= mongoose.model('prod1',productSchema,'info')
