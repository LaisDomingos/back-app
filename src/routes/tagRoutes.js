const express = require("express");
const router = express.Router();
const { getAllTags, getTagBySerialNumber, createTag } = require("../controllers/tagController");

// Rota para buscar todas as tags
router.get("/tags", getAllTags);

// Rota para buscar tag pelo serial number
router.get("/tags/:serial_number", getTagBySerialNumber);

// Rota para criar uma nova tag
router.post("/tags", createTag);

module.exports = router;
