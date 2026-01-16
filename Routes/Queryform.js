const express=require('express')
const router=express.Router();
const queryform=require('../models/Queryform')
const auth=require('../middleware/authMiddleware')


router.get('/',auth, async (req,res)=>{
    const query=await queryform.find();
    res.send(query)
})

router.get('/enquiryCount', auth, async (req, res) => {
  try {
    const count = await queryform.countDocuments(); // countDocuments is count all objects of module queryform and i save that data in count

    res.status(200).json({
      success: true,
      count
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});




router.post('/',async(req,res)=>{
    try{
const user=await queryform.create(req.body)
    res.status(201).json({message:"ticket gen succesfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


// PUT API update the data on database based on ID
router.put('/:id',auth, async (req, res) => {
  await queryform.findByIdAndUpdate(req.params.id, {
    status: 'Read'
  });

  res.json({ success: true });
});

//Delete the data from the database by used to ID
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedPoint = await queryform.findByIdAndDelete(req.params.id);
    if (!deletedPoint) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ success: true, message: "Deleted successfully", data: deletedPoint });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
module.exports=router