const express = require("express")
const app = express()
const PORT = 8080
const bodyParser = require('body-parser')
const connection = require("./database/database")
const router = require("./routes")

// Database
connection
    .authenticate()
    .then(() => {
        console.log(`Conexão feita com o banco`)
    })
    .catch((err) => {
        console.log(err)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes //
app.use(router)

// End Routes //
app.listen(PORT, () => {console.log(`App rodando`)})