const jwt = require('jsonwebtoken');

const createToken = jwt.sign(payload,process.env.PRIVAT_KEY,(err,token)=>{
    if(err){
        console.error("INVALID: ",err.message)
    }
    else{
        console.log(token);
    }
})

const validateToken = jwt.verify(token,process.env.PRIVATE_KEY);

//verify token
jwt.verify(token,process.env.PRIVATE_KEY, function(err,decoded){
    console.log(decoded.foo)
});

//invalid token - synchronous
try{
    var decoded = jwt.verify(token, 'wrong-secret');
    
}