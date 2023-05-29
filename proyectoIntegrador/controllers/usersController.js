const data= require("../data/data")
const db = require('../database/models')
const User = db.User;


const usersController = {
    perfil: function(req, res) {
        return res.render('profile', {data:data});
        
    },
    editar: function (req, res) {
        return res.render('profile-edit', {data:data} )
    },
    
     

        
    
    
}

module.exports = usersController;