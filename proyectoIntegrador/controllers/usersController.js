const data= require("../data/data")

const usersController = {
    perfil: function(req, res) {
        return res.render('profile' );
        
    },
    editar: function (req, res) {
        return res.render('profile-edit')
    },
    
     

        
    
    
}

module.exports = usersController;