const express=require('express')
const queryform=require('../models/Queryform')
const router=express.Router();


router.post('/',async(req,res)=>{
    const form=await queryform.create(req.body)
})

module.exports=router