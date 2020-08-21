const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = 8000


app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(_dirname, "static")))


app.get("/", (req, res) => {
    console.log("Server work!")
    res.redirect("/")
})

app.listen(PORT)