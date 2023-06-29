const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 5100;
const connectDB = require("./app");
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json())
const prod_routes = require('./routes/prod');
const bodyParser = require('body-parser');

app.use((req,res,next)=>
{
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Header,origin,X-Requested-with,Content-Type,Accept");
    next();
})


app.get('/',(req,res)=>{
    res.send("Hi, I am live...")
})

//middleware or to set router
app.use('/api/prod',prod_routes)


const start= async()=>
{
        await connectDB();
        app.listen(port,()=>
        {
            console.log(`${port} yes, I am connected..`)
        })

}
start();