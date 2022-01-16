const express = require("express")
const app = express()
const PORT = 8080
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes //
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/criar_historia", (req, res) => {
    res.render("criar_historia")
})

app.post("/salvarhistoria", (req, res) => {
    try{
        var titulo = req.body.titulo
        var descricao = req.body.descricao
        res.send(`Titulo ${titulo}, Descrição: ${descricao}`)
    } catch(e){
        res.send(`Deu erro --> ${e}`)
    }

})
// End Routes //
app.listen(PORT, () => {console.log(`App rodando`)})