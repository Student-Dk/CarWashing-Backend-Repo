const express=require('express');
const router=express.Router()
const BookUser=require("../models/user")



router.get('/',(req,res)=>{
    res.send("This is booking api")
})


module.exports=router