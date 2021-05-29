const express = require("express");
const router = express.Router();
const Pickup = require("../../models/pickupSchema");
const Complete = require("../../models/completedSchema");
const { json } = require("express");

router.post("/newPickup", async (req, res) => {
  const { pro, carrier, puDate, puTime, notes, user } = req.body;

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
      createdBy: user,
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
    console.log(error);
  }
});

router.get("/getCompleted", async (req, res) => {
  try {
    const completed = await Complete.find({});

    res.json(completed);
  } catch (error) {
    console.log(error);
  }
});

router.put("/updatePU", async (req, res) => {
  const { id, data } = req.body;

  try {
    const updatePU = await Pickup.findByIdAndUpdate(
      { _id: id },
      {
        comments: data.comments,
        loader: data.loader,
        updatedOn: Date.now(),
        showUpdates: false,
        notes: data.notes,
      },
      { new: true }
    );
    return res.json(updatePU);
  } catch (error) {
    console.log(error);
  }
});

router.put("/pickedUp", async (req, res) => {
  const { id, data, puNumber } = req.body;

  try {
    const completedPickup = await Pickup.findByIdAndUpdate(
      id,
      {
        comments: data.comments,
        loader: data.loader,
        updatedOn: Date.now(),
        showUpdates: false,
        puOn: data.puOn,
        status: "completed",
      },
      { new: true }
    );

    // const completed = new Complete({
    //   _id: completedPickup._id,
    //   csr: completedPickup.csr,
    //   pro: completedPickup.pro,
    //   carrier: completedPickup.carrier,
    //   receiver: "",
    //   puDate: completedPickup.puDate,
    //   puTime: completedPickup.puTime,
    //   loader: completedPickup.loader,
    //   notes: completedPickup.notes,
    //   comments: completedPickup.comments,
    //   confirmingReceiver: "",
    //   confirmingCSR: "",
    //   showDetails: false,
    //   showUpdates: false,
    //   status: "completed",
    //   puOn: completedPickup.puOn,
    //   pickedupNumber: puNumber,
    // });

    // await completed.save();
    res.json(completedPickup);

    // const removePU = await Pickup.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
