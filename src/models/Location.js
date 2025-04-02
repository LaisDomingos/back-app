const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },  
    tag: { type: String, required: true },
    descricao: { type: String, required: true }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, // Adiciona apenas `createdAt`
  }
);

const Location = mongoose.model("Location", locationSchema);

module.exports = Location; 
