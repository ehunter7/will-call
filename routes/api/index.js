const router = require("express").Router();
const pickupRoute = require("./pickupRoute");
const userRoutes = require("./users");

router.use("/pu", pickupRoute);

router.use("/users", userRoutes);

module.exports = router;
