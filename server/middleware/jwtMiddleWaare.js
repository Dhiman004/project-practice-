var jwt=require('jsonwebtoken');

const geerateToken=(userData)=>{
    //int his function we are creating new/fresh JWT token to provide user, for login/session management or for authorization purpose.
    return jwt.sign(userData,process.env.PRIVATE_KEY)
}

const validateJwtToken = (req,res,next)=>{
    //first we are checking that JWT token is avaialable or not.
    const authorization= req.headers.authorization;

    //output 1 : bearer sndvkjdlvnfd 
    //output 2 : sndvkjdlvnfd 
    //output 3 : ' '
    //output 4 : token bnaa hi nhi h,local ho ya endpoint se bheja ho mtln without token header send kra h 
    if(!authorization){
        return res.status(401).json({err:'Token not available'})
    }  
    //we are storing the token 
    const token = req.headers.authorization.split(' ')[1]
    // token provided is wrong,throw error message unauhtorised user
    if(!token){
        return res.status(401).json({err:'unauthorization User'});
    }

    try{
        //in this error handler try catch: we are handling, if token i s validate or verified, then move to next middleware or respond back to client.
        const validateToken= jwt.verify(token,process.env.PRIVATE_KEY);
        req.user=validateToken;
        next();
    }
    catch(err){
        console.log("ERROR OCURRED : ",err.message);
    }
}

module.exports= {geerateToken,validateJwtToken}