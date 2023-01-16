const express = require('express');
const { UserModel } = require('../model/User.model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userRouter = express.Router();

userRouter.post("/register",  (req, res) => {
    const {name, email, gender,password } = req.body
    try {
        bcrypt.hash(password,8,async (err,hash) => {
            const user1 = new UserModel({name, email, gender, password:hash});
            await user1.save();
        res.send("registered successfully");
        })
    } catch (error) {
        res.send("Error in registering user");

        console.log(err);
    }
});

userRouter.post('/login',async (req,res)=>{
    const { email,password}= req.body;
    try {
        const user = await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password , user[0].password, function (err,result){
                if(result){
                    const token = jwt.sign({ userId : user[0]},"masai");
                    res.send({"massage":"Login Sucessfully", "token": token});
                }else{
                    res.send("Wrong Credentials");
                }
            })

        }
    } catch (err) {
        res.send("Something Went Wrong");
        console.log(err);
    }
});

module.exports ={
    userRouter
}

