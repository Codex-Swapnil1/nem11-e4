const express = require('express');
const { postModel } = require('../model/Post.model');


const postRouter = express.Router();

postRouter.get('/post',(req, res) => {
    if(req.query.token ==="mobile"){
        res.send("Loggen in and access protected post mobile");
    }
    else{
        res.send("not access the protected post");
    }
});

postRouter.patch("/posts/update:id",(req,res)=>{

});
postRouter.delete("/posts/delete:id",(req,res)=>{

});

module.exports ={
    postRouter
}