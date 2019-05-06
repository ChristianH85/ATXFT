var express = require('express');
var router = express.Router();

const passport = require("../passport");
const userRoutes = require("./user");

router.use("/api", userRoutes);
router.use("/truck", truckRoutes);
// router.use("/api", userRoutes);
// User Routes
router.use("/user", userRoutes);
router.use("/passport/init", passport);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

