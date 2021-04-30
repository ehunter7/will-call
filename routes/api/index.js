const router = require("express").Router();
const pickupRoute = require('./pickupRoute');

router.use("/pu", pickupRoute);



module.exports = router;