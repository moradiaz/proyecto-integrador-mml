const data= require("../data/data")

const usersController = {
    perfil: function(req, res) {
        return res.render('profile', {data:data});
        
    },
    editar: function (req, res) {
        return res.render('profile-edit', {data:data} )
    },
    
     

        
    
    
}

module.exports = usersController;