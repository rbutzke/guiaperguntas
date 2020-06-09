const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('respostas', {
      corpo: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      perguntaId: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
});

Resposta.sync({force: false}).then(() => {
    console.log('Tabela Respostas Criada com Sucesso!!!')
}).catch((err) => {
    console.log('Erro ao Criar a Tabela Respostas: '+ err)
});

module.exports = Resposta;