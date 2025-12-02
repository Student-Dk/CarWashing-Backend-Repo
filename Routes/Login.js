const express=require('express')
const router=express.Router();
const Admin=require("../models/Admin")
const bcrypt=require('bcrypt')
 const jwt = require("jsonwebtoken");
require("dotenv").config();
router.get('/',(req,res)=>{
    res.send("this is login route")
})
router.post('/',async(req,res)=>{
try{
    const {userId, password}=req.body;
    const user= await Admin.findOne({userId}) 
    if(!user) return res.status(400).json({message:"User Not found"})
    const checkPassword= await bcrypt.compare(password,user.password)
    if(!checkPassword) return res.status(400).json({message:"Invalid credentials"})    //jwt genrate
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"5h"})
    res.json({message:"login successfully  ", token})
}catch(error){
res.status(500).json({message:error})
//res.send("error")
}   
})
module.exports = router;

