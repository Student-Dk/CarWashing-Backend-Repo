const express=require('express')
const router=express.Router()
const pageData=require('../models/pagedata')

router.get('/',async(req,res)=>{
    res.send('hello')
})

module.exports=router