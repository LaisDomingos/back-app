require("dotenv").config(); // Carrega as variáveis de ambiente
const express = require("express");
const connectToDatabase = require("./src/config/database");
require("dotenv").config(); // Carrega as variáveis do arquivo .env

const app = express();
const PORT = process.env.PORT || 4000;

// Conecta ao banco de dados
connectToDatabase();

// Middleware para JSON
app.use(express.json());

// Rotas
const routes = require("./src/routes");
app.use("/api", routes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});