const indexController =  {
    index: function (req,res) {
        return res.render("register")
        
    },
    login: function (req,res) {
        return res.render("login")
        
    },
    search: function (req,res) {
        return res.render("search-results")
        
    }
}


module.exports = indexController 




