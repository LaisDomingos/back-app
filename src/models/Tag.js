const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    serial_number: { type: String, required: true },
    id: { type: String, required: true }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, // Apenas `createdAt`
  }
);

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
