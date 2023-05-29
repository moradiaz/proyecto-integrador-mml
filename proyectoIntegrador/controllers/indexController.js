const data= require("../data/data")
const db = require('../database/models')
const Product = db.Producto;

const indexController =  {
    principal:function(req, res, next) {
        let relaciones = {
            include:[
                {association:'productosUsuarios'},
                {association:'comentarios'}
            ]
        }
        Product.findAll(relaciones,

        {order:[
            ['createdAt', 'DESC']
        ]})
        
        .then(function(data){
           console.log(data);
            return res.render('index', {productos:data});

        }).catch(function(error){
            console.log(error);
            res.send({error})
        })
        
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





