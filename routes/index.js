const router = require("express").Router();//.Router()
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;