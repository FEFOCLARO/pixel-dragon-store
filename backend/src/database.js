// Importamos o pacote mysql2
const mysql = require('mysql2');

// Criamos a conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',        // O host do seu banco (geralmente localhost)
    user: 'fernando',             // O usuário do banco (você usou fernando, PODE SER root)
    password: 'pixeldragon',    // A senha que você configurou no MySQL Workbench
    database: 'pixel_dragon_store' // O nome do banco que criamos
});

// Testamos a conexão
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

// Exportamos a conexão para usá-la em outros arquivos
module.exports = db;
