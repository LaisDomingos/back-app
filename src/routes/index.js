const express = require("express");
const router = express.Router();

const locationRoutes = require("./locationRoutes");
const justificationRoutes = require("./justificationRoutes");
const tagRoutes = require("./tagRoutes")

router.use(locationRoutes);
router.use(justificationRoutes);
router.use(tagRoutes);

module.exports = router;
