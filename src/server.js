// Carrega as variáveis de ambiente
require("dotenv").config(); 

const express = require("express");
const cors = require("cors"); // Importa o pacote CORS
const connectToDatabase = require("./config/database");

// Cria a aplicação Express
const app = express();

// Define a porta do servidor. O Render atribui automaticamente a variável process.env.PORT
const PORT = process.env.PORT || 4000; 

// Conecta ao banco de dados
connectToDatabase();

// Middleware para lidar com JSON
app.use(express.json());

// Middleware para permitir CORS
app.use(cors());  // Permite todas as origens para todas as rotas

// Se quiser permitir apenas um domínio específico, use o código abaixo:
// app.use(cors({
//   origin: 'https://seu-dominio-frontend.com',
// }));

// Rotas (faça a importação das suas rotas)
const routes = require("./routes");
app.use("/api", routes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
