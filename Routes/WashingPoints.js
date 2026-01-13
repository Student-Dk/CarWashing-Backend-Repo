const express=require('express')
const router=express.Router();
const washing_point_names=require('../models/WashingPoint')
const auth=require('../middleware/authMiddleware')

router.get('/',async (req,res)=>{
    const washing_points=await washing_point_names.find();
    res.send(washing_points)
})

router.get("/:id", async (req, res) => {
  const data = await washing_point_names.findById(req.params.id);
  res.json(data);
});
try{
    const user=await washing_point_names.create(req.body)
    res.status(201).json({message:"Add Washing Point Successfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
router.post('/',auth,async(req,res)=>{

    
})



router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedPoint = await washing_point_names.findByIdAndDelete(
      req.params.id
    );

    if (!deletedPoint) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
      data: deletedPoint,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = await washing_point_names.findByIdAndUpdate(
      id,
      {
        Car_Washing_Point_Name: req.body.Car_Washing_Point_Name,
        Address: req.body.Address,
        Contact_No: req.body.Contact_No,
      },
      { new: true } // updated data return karega
    );

    if (!updatedData) {
      return res.status(404).json({
        message: "Washing point not found",
      });
    }

    res.status(200).json({
      message: "Updated successfully",
      data: updatedData,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports=router