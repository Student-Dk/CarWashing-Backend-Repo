const express = require('express');
const router = express.Router();
const washing_point_names = require('../models/WashingPoint');
const auth = require('../middleware/authMiddleware');


router.get('/c', auth, async (req, res) => {
  try {
    const count = await washing_point_names.countDocuments(); // 👈 no condition

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
// Get all Washing point address
router.get('/', async (req, res) => {
  try {
    const washing_points = await washing_point_names.find();
    res.send(washing_points);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific data
router.get('/:id', async (req, res) => {
  try {
    const data = await washing_point_names.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new washing point
router.post('/', auth, async (req, res) => {
  try {
    const user = await washing_point_names.create(req.body);
    res.status(201).json({ message: "Add Washing Point Successfully", data: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE washing point
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedPoint = await washing_point_names.findByIdAndDelete(req.params.id);
    if (!deletedPoint) return res.status(404).json({ message: "Data not found" });
    res.status(200).json({ success: true, message: "Deleted successfully", data: deletedPoint });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// UPDATE washing point
router.put('/:id', auth, async (req, res) => {
  try {
    const updatedData = await washing_point_names.findByIdAndUpdate(
      req.params.id,
      {
        Car_Washing_Point_Name: req.body.Car_Washing_Point_Name,
        Address: req.body.Address,
        Contact_No: req.body.Contact_No,
      },
      { new: true }
    );

    if (!updatedData) return res.status(404).json({ message: "Washing point not found" });

    res.status(200).json({ message: "Updated successfully", data: updatedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = router;
