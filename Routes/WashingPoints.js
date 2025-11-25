const express=require('express')
const router=express.Router();
const washing_point_names=require('../models/WashingPoint')
const auth=require('../middleware/authMiddleware')

router.get('/',async (req,res)=>{
    const washing_points=await washing_point_names.find();
    res.send(washing_points)
})

router.post('/',auth,async(req,res)=>{
    const user=await washing_point_names.create(req.body)
    res.send("Add successfully")
})
module.exports=router