const Sequelize = require('sequelize')
const connection = require('./database')

const Story = connection.define('story', {
    title: {
        type: Sequelize.STRING,
        allowNull: false // Impede que o campo receba null  
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})
// Se no meu BD, não existe uma tabela chamada pergunta ele vai criar //
// Caso a tabela já exista, ela não vai recriar
Story.sync({force: false}).then(() => {console.log(`Tabela criada`)}) 

module.exports = Story