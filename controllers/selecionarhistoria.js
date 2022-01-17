const Story = require("../model/story")

module.exports = function(req, res){
    var id = req.params.id
    Story.findOne({
        where: {id: id}
    }).then(story => {
        if(story != undefined){
            res.render("selecionar_historia", {
                story
            })
        }else{
            res.redirect("/")
        }
    })  
}