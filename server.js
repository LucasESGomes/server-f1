const express = require('express');

const app = express();

//Rota para os arquivos estáticos (public)
app.use(express.static('public'));

//Qual a porta irá rodar
app.listen(3000, () => {
    console.log('Servidor rodando o link http://localhost:3000');
})