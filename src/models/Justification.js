const mongoose = require("mongoose");

const justificationSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    rut: { type: String, required: true },
    patente: { type: String, required: true },
    material: { type: String, required: true },
    destinoInicial: { type: String, required: true },
    destinoFinal: { type: String, required: true },
    justificativa: { type: String, required: true }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, // Apenas `createdAt`
  }
);

const Justification = mongoose.model("Justification", justificationSchema);

module.exports = Justification;