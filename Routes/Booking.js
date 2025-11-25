const express=require('express');
const router=express.Router()
const BookUser=require("../models/user")



router.get('/',(req,res)=>{
    res.send("This is booking api")
})

router.post('/',async(req,res)=>{

    const user=await BookUser.create(req.body);
    res.send(user)

})
module.exports=router