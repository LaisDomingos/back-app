const express = require("express");
const router = express.Router();
const { createJustification, getAllJustifications } = require("../controllers/justificationController");

router.post("/justification", createJustification);
router.get("/justification", getAllJustifications);

module.exports = router;
