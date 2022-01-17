const Story = require("../model/story")

module.exports = function(req, res){
    var id = req.params.id
    Story.destroy({where: {id: id}})
    res.redirect("/")
}