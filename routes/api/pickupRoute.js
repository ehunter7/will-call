const express = require("express");
const router = express.Router();
const Pickup = require("../../models/pickupSchema");

router.post("/newPickup", async (req, res) => {
  const { pro, carrier, puDate, puTime } = req.body;
  
  try {
    const newPU = new Pickup({

        csr: "",
      pro,
      carrier,
      receiver: "",
      puDate,
      puTime,
      loader: "",
      notes: "",
      comments: "",
      confirmingReceiver: "",
      confirmingCSR: "",
    });

    await newPU.save();
    res.json(newPU);

  } catch (error) {
    console.log(error);
  }
});

router.get('/getPickups', async (req, res) => {
  
  try {

    const allPickups = await Pickup.find({});

    res.json(allPickups);

  } catch (error) {

    console.log('[WARNING] Error in getPickups route (pickupRoute.js / Line 38)');
  };
});

module.exports = router;
