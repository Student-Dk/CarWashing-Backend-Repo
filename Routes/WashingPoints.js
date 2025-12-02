const express=require('express')
const router=express.Router();
const washing_point_names=require('../models/WashingPoint')
const auth=require('../middleware/authMiddleware')

router.get('/',async (req,res)=>{
    const washing_points=await washing_point_names.find();
    res.send(washing_points)
})

router.post('/',auth,async(req,res)=>{

    try{
    const user=await washing_point_names.create(req.body)
    res.status(201).json({message:"Add Washing Point Successfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})
module.exports=router