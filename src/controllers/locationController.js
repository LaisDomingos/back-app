const Location = require("../models/Location");

// Buscar todas as localizações
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar uma nova localização
const createLocation = async (req, res) => {
  const { latitude, longitude, tag, descricao } = req.body;
  console.log(latitude, longitude, tag, descricao)
  try {
    const newLocation = new Location({
      latitude,
      longitude,
      tag,
      descricao
    });

    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllLocations, createLocation };
