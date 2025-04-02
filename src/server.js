require("dotenv").config(); // Carrega as variáveis de ambiente
const express = require("express");
const connectToDatabase = require("./config/database");

const app = express();

// Conecta ao banco de dados
connectToDatabase();

// Middleware para JSON
app.use(express.json());

// Rotas
const routes = require("./routes");
app.use("/api", routes);

// Exporta o app para a Vercel
module.exports = app;
