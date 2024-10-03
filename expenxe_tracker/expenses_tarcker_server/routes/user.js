const express=require('express');
const db=require('../dbutils');
const utils=require('../Utils');

const userRouter=express.Router();

userRouter.post('/register',(req,res)=>{
    debugger;
    console.log("registarion hit");
    const{username,password,mobile_number}=req.body;
    sql=`insert into users(username,password,mobile_number) values(?,?,?)`;
    db.pool.execute(sql,[username,password,mobile_number],(err,result)=>{
        res.send(utils.createSuccessResult(err,result))
    })
})

userRouter.post('/login',(req,res)=>{
    console.log("login hit");
    const{username,password}=req.body;
    sql=`select *  from users where username =?
     and password=?`;
     console.log(req.body);
    db.pool.execute(sql,[username,password],(err,result)=>{
        res.send(utils.createSuccessResult(err,result))
    })
})

module.exports= userRouter