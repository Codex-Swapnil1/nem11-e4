const jwt =require('jsonwebtoken');
require("dotenv").config();
const authenticate =(req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]
        if(token){
            const decoded = jwt.verify(token,"masai")
            if(decoded){
                const userID =  decoded.userID;
                req.body.userID = userID
                next();
            }else{
                res.send("Please Login");
            }
        }else{
            res.send("Please Login");
        }
}

module.exports ={
    authenticate
}