const express = require("express");
const router = express.Router();
const Pickup = require("../../models/pickupSchema");

router.post("/newPickup", async (req, res) => {
  const { pro, carrier, puDate, puTime } = req.body;
  try {
    const newPU = new Pickup({
    pickupNumber: 1,
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
      puDate: null,
    });
    console.log(pro);
    await newPU.save();
    res.json(newPU);

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
