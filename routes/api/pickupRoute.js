const express = require("express");
const router = express.Router();
const Pickup = require("../../models/pickupSchema");
const Complete = require("../../models/completedSchema");
const { json } = require("express");

router.post("/newPickup", async (req, res) => {
  const { pro, carrier, puDate, puTime, notes, user } = req.body;

  let pickupNum;

  try {
    await Pickup.findOne(
      {},
      {},
      { sort: { createdOn: -1 } },
      function (err, post) {
        pickupNum = post.pickupNumber + 1;
      }
    );

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
      lastUpdatedBy: user,
      pickupNumber: pickupNum,
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
        lastUpdatedBy: data.user,
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

    res.json(completedPickup);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/cancelPickup", async (req, res, next) => {
  const { _id } = req.body;

  try {
    await Pickup.deleteOne({ _id: _id });
    res.status(200).json({ message: "Post deleted" });
    next();
  } catch (error) {
    console.log("====================================");
    console.log("[WARNING] Error pickup delete route");
    console.log(error);
    console.log("====================================");
  }
});

router.put("/setToCancel", async (req, res) => {
  try {
    const updatedPickup = await Pickup.findByIdAndUpdate(req.body.data._id, {
      status: "cancelled",
      updatedOn: Date.now(),
    });

    res.json(updatedPickup);
  } catch (error) {
    console.log("====================================");
    console.log("[WARNING] SET TO CANCEL");
    console.log(error);
    console.log("====================================");
  }
});

module.exports = router;
