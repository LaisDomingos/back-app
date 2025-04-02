const Justification = require("../models/Justification");

// Buscar todas as justificativas
const getAllJustifications = async (req, res) => {
  try {
    const justifications = await Justification.find();
    res.status(200).json(justifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar uma nova justificativa
const createJustification = async (req, res) => {
  const { nome, rut, patente, material, destinoInicial, destinoFinal, justificativa } = req.body;
  
  try {
    const newJustification = new Justification({
      nome,
      rut,
      patente,
      material,
      destinoInicial,
      destinoFinal,
      justificativa,
    });
    console.log("JUST: ", newJustification)
    await newJustification.save();
    res.status(201).json(newJustification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllJustifications, createJustification };
