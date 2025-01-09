// Importamos os pacotes que instalamos via npm
// express: Framework web que facilita a criação de servidores e rotas
// cors: Permite que outros sites façam requisições para nosso servidor
// dotenv: Carrega variáveis de ambiente do arquivo .env
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Criamos uma nova aplicação Express
// Pense nisto como criar um novo servidor web
const app = express();

// Definimos a porta onde o servidor vai rodar
// process.env.PORT procura uma variável PORT no arquivo .env
// Se não encontrar, usa 3001 como valor padrão
const PORT = process.env.PORT || 3001;

// Configuramos os middlewares
// Middlewares são funções que processam as requisições antes delas chegarem às rotas

// cors() permite que nosso frontend React (que roda em outra porta)
// possa fazer requisições para este servidor
app.use(cors());

// express.json() permite que o servidor entenda dados enviados no formato JSON
// Sem isto, não conseguiríamos receber dados de formulários do frontend
app.use(express.json());

// Criamos uma rota de teste
// Quando alguém acessar http://localhost:3001/test
// O servidor responderá com a mensagem abaixo
app.get('/test', (req, res) => {
    res.json({ 
        message: 'Servidor funcionando!',
        project: 'Pixel Dragon Store',
        status: 'online'
    });
});

// Iniciamos o servidor
// O método listen faz o servidor começar a "escutar" requisições na porta definida
app.listen(PORT, () => {
    console.log(`🚀 Servidor da Pixel Dragon Store rodando!`);
    console.log(`📁 Acesse: http://localhost:${PORT}`);
    console.log(`🛠️  Rota de teste: http://localhost:${PORT}/test`);
});