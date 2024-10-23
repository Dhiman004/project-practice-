const express = require("express");
const connectDb = require("./config/dbConnections.js");
const errorHandler  = require("./middlewares/errorHandler.js");
const cors = require("cors");

//env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();

const app = express();
const port = process.env.port || 5000 || 4000 || 4900 ||1000;

app.use(express.json());
app.use(cors()); 
app.get('/',(req,res)=>{
    res.send("working");
});

app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
});
