const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const dbURI = process.env.MONGO_URI;
    await mongoose.connect(dbURI); // 🔥 Opções removidas
    console.log("✅ Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Encerra se falhar
  }
};

module.exports = connectToDatabase;
