const express = require('express');
const router = express.Router();
const BookUser = require("../models/user");
const auth = require('../middleware/authMiddleware');

// GET all BookUser
router.get('/', auth, async (req, res) => {
  try {
    const user = await BookUser.find();
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/totalCount', auth, async (req, res) => {
  try {
    const count = await BookUser.countDocuments(); 

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




router.get('/New', auth, async (req, res) => {
  try {
    const user = await BookUser.find({status:'new'});
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get('/new/count', auth, async (req, res) => {
  try {
    const count = await BookUser.countDocuments({ status: 'new' });

    res.status(200).json({
      success: true,
      status: 'new',
      count
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});




router.get('/complete', auth, async (req, res) => {
  try {
    const user = await BookUser.find({status:'completed'});
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/complete/count', auth, async (req, res) => {
  try {
    const count = await BookUser.countDocuments({ status: 'completed' });

    res.status(200).json({
      success: true,
      status: 'new',
      count
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});


router.post('/', async (req, res) => {
  try {
    let bookingId;
    let saved = false;
    let user;

    while (!saved) {
      bookingId = Math.floor(100000000 + Math.random() * 900000000);

      try {
        user = await BookUser.create({
          ...req.body,
          bookingId   
        });
        saved = true;

      } catch (err) {
        if (err.code !== 11000) {
          throw err;
        }
       
      }
    }

    res.status(201).json({
      message: "Booking successful",
      bookingId
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET by id
router.get('/:id', auth, async (req, res) => {
  try {
    const data = await BookUser.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/:id', auth, async (req, res) => {
  try {
    const { transactionType, transactionNumber, adminRemarks } = req.body;

    const data = await BookUser.findByIdAndUpdate(
      req.params.id,
      {
        transactionType,
        transactionNumber,
        adminRemarks,
        status: "completed"
      },
      { new: true } 
    );

    if (!data) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({
      message: "Updated successfully",
      data
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
