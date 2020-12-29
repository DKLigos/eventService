const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const event = sequelize.define('Event',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    fio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    },
    listEvent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    theme:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    currentDate:{
        type: Sequelize.DATEONLY,
    },
    currentTime:{
        type: Sequelize.DATE,
    },

})
module.exports = event
