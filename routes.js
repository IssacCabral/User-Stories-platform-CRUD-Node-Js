const criarHistoria = require("./controllers/criarhistoria")
const encontrarTodasHistorias = require("./controllers/encontrarTodasHistorias")
const deletarhistoria = require("./controllers/deletarhistoria")
const alterarhistoria = require("./controllers/alterarhistoria")
const visualizarhistoria = require("./controllers/visualizarhistoria")
const selecionarhistoria = require("./controllers/selecionarhistoria")

const {Router} = require('express')
const router = Router()

router.get("/", encontrarTodasHistorias)

router.get("/criar_historia", (req, res) => {
    res.render("criar_historia")
})

router.post("/salvarhistoria", criarHistoria)

router.get("/historia/:id", visualizarhistoria)

router.get("/selecionarhistoria/:id", selecionarhistoria)

router.post("/alterarhistoria/:id", alterarhistoria)

router.get("/deletarhistoria/:id", deletarhistoria)

module.exports = router