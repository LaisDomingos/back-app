const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const dbURI = process.env.MONGO_URI; // URL do cluster
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Finaliza o processo em caso de falha
  }
};

module.exports = connectToDatabase;
