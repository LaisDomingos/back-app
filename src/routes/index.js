const express = require("express");
const router = express.Router();

const locationRoutes = require("./locationRoutes");
const justificationRoutes = require("./justificationRoutes");

router.use(locationRoutes);
router.use(justificationRoutes);

module.exports = router;
