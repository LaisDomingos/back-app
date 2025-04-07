const Tag = require("../models/Tag");

// Buscar todas as tags
const getAllTags = async (req, res) => {
    try {
        const tags = await Tag.find();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar tag pelo serial number
const getTagBySerialNumber = async (req, res) => {
    const { id } = req.params; // Pega o serial_number do parâmetro da URL
    try {
        const tag = await Tag.findOne({ id });
        if (!tag) {
            return res.status(404).json({ message: "Tag não encontrada" });
        }
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Criar uma nova tag
const createTag = async (req, res) => {
    const { serial_number, id } = req.body;

    // Verifica se os dados obrigatórios foram passados
    if (!serial_number || !id) {
        return res.status(400).json({ message: "Serial number e id são obrigatórios" });
    }

    try {
        const newTag = new Tag({
            serial_number,
            id
        });

        // Salva a nova tag no banco de dados
        await newTag.save();
        res.status(201).json(newTag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllTags, getTagBySerialNumber, createTag };
