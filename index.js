const express = require("express")
const app = express()
const PORT = 8080
const bodyParser = require('body-parser')
const connection = require("./database/database")
const Story = require("./database/story")

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
app.get("/", (req, res) => {
    Story.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then((stories) => {
        res.render("index", {
            stories: stories
        })
    })
    
})

app.get("/criar_historia", (req, res) => {
    res.render("criar_historia")
})

app.post("/salvarhistoria", (req, res) => {
    var title = req.body.titulo
    var description = req.body.descricao
    Story.create({
        title: title, 
        description: description
    }).then(() => {
        res.redirect("/")
    })

})

app.get("/historia/:id", (req, res) => {
    var id = req.params.id
    Story.findOne({
        where: {id: id}
    }).then(story => {
        if(story != undefined){
            res.render("story", {
                story: story
            })
        }else{
            res.redirect('/')
        }
    })
})

// End Routes //
app.listen(PORT, () => {console.log(`App rodando`)})