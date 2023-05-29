const data= require("../data/data")
const db = require('../database/models')
const Product = db.Product;

const indexController =  {
    principal:function(req, res, next) {
        res.render('index', {productos:data.productos});
      },
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





