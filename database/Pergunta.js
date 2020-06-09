const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {
    console.log('Tabela Perguntas Criada com Sucesso!!!')
}).catch((err) => {
    console.log('Erro ao Criar a Tabela Pergunta: '+ err)
});

module.exports = Pergunta;