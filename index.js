const express = require('express');
const { connection } = require('./config/db');
const { authenticate } = require('./Middleware/auth.middleware');
const { postRouter } = require('./routes/PostRouter.route');
const { userRouter } = require('./routes/UserRouter.route');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to Social App!");
})
app.use("/users",userRouter);
app.use(authenticate);
app.use("/posts",postRouter);
// app.use("/posts/update",postRouter);
// app.use("/posts/delete",postRouter);

app.listen(process.env.port,async ()=>{
    try {
        await connection
    } catch (err) {
        console.log(err)
    }
    console.log("Running on port");
});