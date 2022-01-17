const Story = require("../model/story")

module.exports = function(req, res){
    var id = req.params.id
    var title = req.body.titulo
    var description = req.body.descricao

    Story.findByPk(id).then((story) => {
        story.title = title
        story.description = description
        story.save()
        res.redirect("/")
    })
}