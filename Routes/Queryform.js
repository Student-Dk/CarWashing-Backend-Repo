const express=require('express')
const router=express.Router();
const queryform=require('../models/Queryform')
const auth=require('../middleware/authMiddleware')


router.get('/',auth, async (req,res)=>{
    const query=await queryform.find();
    res.send(query)
})





router.post('/',async(req,res)=>{
    try{
const user=await queryform.create(req.body)
    res.status(201).json({message:"ticket gen succesfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


// PUT /query/read/:id
router.put('/:id',auth, async (req, res) => {
  await queryform.findByIdAndUpdate(req.params.id, {
    status: 'Read'
  });

  res.json({ success: true });
});

module.exports=router