const Story = require("../model/story")

module.exports = function(req, res){
    var title = req.body.titulo
    var description = req.body.descricao
    Story.create({
        title: title, 
        description: description
    }).then(() => {
        res.redirect("/")
    })
}