const Sequelize = require('sequelize')
const sequelize = require('../db/database')

const user = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_title:{
        type: Sequelize.STRING,
        allowNull: true
    },
    user_FirstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_LastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_pass: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_birth: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_mobile:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    
})

module.exports = user