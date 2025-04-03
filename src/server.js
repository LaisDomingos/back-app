// Carrega as variáveis de ambiente
require("dotenv").config(); 

const express = require("express");
const connectToDatabase = require("./config/database");

// Cria a aplicação Express
const app = express();

// Define a porta do servidor. O Render atribui automaticamente a variável process.env.PORT
const PORT = process.env.PORT || 4000; 

// Conecta ao banco de dados
connectToDatabase();

// Middleware para lidar com JSON
app.use(express.json());

// Rotas (faça a importação das suas rotas)
const routes = require("./routes");
app.use("/api", routes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

