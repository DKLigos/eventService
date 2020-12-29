const Sequelize = require('sequelize')

const DB_NAME = 'eventdata'
const USER_NAME = 'root'
const PASSWORD = 'Gv4atqH2P'

const sequelize = new Sequelize(DB_NAME,USER_NAME,PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

module.exports = sequelize
