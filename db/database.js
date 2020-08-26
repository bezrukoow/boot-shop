const Sequelize = require('sequelize')


const sequelize = new Sequelize("bootshop", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize
