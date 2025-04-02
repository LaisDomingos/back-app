const express = require("express");
const router = express.Router();
const { createLocation, getAllLocations } = require("../controllers/locationController");

router.post("/location", createLocation);
router.get("/location", getAllLocations);

module.exports = router;