const indexController =  {
    index: function (req,res) {
        return res.render("register")
        
    },
    login: function (req,res) {
        return res.render("login")
        
    }

}


module.exports = indexController 




