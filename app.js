const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//Include sequalize
const sequelize = require('./db/database')

const app = express()
const PORT = 8000

//Database
const db = require('./db/database')

app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "static")))


const Pages = require('./routes/pages')
const errorPage = require('./controllers/errorPage')

// Connect pages
app.use(Pages)

// Page 404
app.use(errorPage.get404)

sequelize
    .sync()
    .then(res => {
        app.listen(PORT)
    })
    .catch(err => console.log(err))
