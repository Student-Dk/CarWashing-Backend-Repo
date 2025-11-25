const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const AdminRegister=require('../models/Admin')


router.post('/',async(req,res)=>{
    try{
    const {name,email,userId,password}=req.body;
    const saltRounds=10;
    const hashpassword=await bcrypt.hash(password,10)


    const user=await AdminRegister.create({name,email,userId,password:hashpassword})
    // res.send(name+"  "+email+"  "+userId+"   "+password);
    // res.send(user)
    res.status(201).json({message:"User Registered Successfuly"})
    
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports=router