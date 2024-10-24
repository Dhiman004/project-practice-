const express = require("express");
const connectDb = require("./config/dbConnection.js");
const errorHandler  = require("./middleware/errorHandler.js");
const cors = require("cors");

//env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();

const app = express();
const port = 5000 || 4000 || 4900 ||1000 || 2999 || 1024 || 8080;

app.use(express.json());
app.use(cors()); 
app.get('/',(req,res)=>{
    res.send("working");
});

app.get('/home',(req,res)=>{
    res.render('home',{
        username: "xyz",
        posts: "flana dhimkana"
    })
})

app.get('/allusers',(req,res)=>{
    res.render('allusers',{
        data:[{name:"abc", age:20},
            {name:"def", age:19}]
    })
})
// route for user registration and authentication
app.use("/api/register", require("./routes/userRoutes"));

app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
});