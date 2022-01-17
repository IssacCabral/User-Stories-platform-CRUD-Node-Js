const Story = require("../model/story")

module.exports = function(req, res){
    Story.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then((stories) => {
        res.render("index", {
            stories: stories
        })
    })
}