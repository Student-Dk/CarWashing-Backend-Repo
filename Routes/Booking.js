const express = require('express');
const router = express.Router();
const BookUser = require("../models/user");

router.get('/', (req, res) => {
  res.send("This is booking api");
});

router.post('/', async (req, res) => {
  try {
    let bookingId;
    let saved = false;
    let user;

    while (!saved) {
      bookingId = Math.floor(100000 + Math.random() * 900000);

      try {
        user = await BookUser.create({
          ...req.body,
          bookingId   // ✅ IMPORTANT LINE
        });
        saved = true;

      } catch (err) {
        if (err.code !== 11000) {
          throw err;
        }
        // agar duplicate bookingId → loop continue
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

module.exports = router;
