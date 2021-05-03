const express = require("express");
const router = express.Router();
const Pickup = require("../../models/pickupSchema");

router.post("/newPickup", async (req, res) => {
  const { pro, carrier, puDate, puTime, notes } = req.body;

  try {
    const newPU = new Pickup({
      csr: "",
      pro,
      carrier,
      receiver: "",
      puDate,
      puTime,
      loader: "",
      notes,
      comments: "",
      confirmingReceiver: "",
      confirmingCSR: "",
      showDetails: false,
      showUpdates: false,
      status: "pending",
    });

    await newPU.save();
    res.json(newPU);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getPickups", async (req, res) => {
  try {
    const allPickups = await Pickup.find({});

    res.json(allPickups);
  } catch (error) {
    console.log(
      "[WARNING] Error in getPickups route (pickupRoute.js / Line 38)"
    );
  }
});

router.put("/updatePU", async (req, res) => {
  const { id, data } = req.body;

  try {
    const updatePU = await Pickup.findByIdAndUpdate(
      { _id: id },
      { comments: data.comments, loader: data.loader, updatedOn: Date.now(), showUpdates: false, notes: data.notes },
      { new: true }
    );
    return res.json(updatePU);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
