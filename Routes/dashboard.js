const express=require('express');
const router=express.Router();
const auth=require('../middleware/authMiddleware')
const User=require('../models/Admin')

router.get('/',auth, async(req,res)=>{
    try {
        // Fetch user info (excluding password)
        
        const user = await User.findById(req.user.id).select("-password");

        if (!user) return res.status(404).json({ msg: "User not found" });

        res.json({
            msg: "Welcome to your dashboard",
            user
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


module.exports=router