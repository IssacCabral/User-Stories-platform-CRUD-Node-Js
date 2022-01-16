const Sequelize = require('sequelize')
const user = 'postgres'
const password = 'postgres'

const connection = new Sequelize('user-stories-db', user, password, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = connection