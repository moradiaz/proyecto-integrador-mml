const data= require("../data/data")
const db = require('../database/models') //importando los modelos -- db variable que nos trae sequelize 
const Product = db.Producto;
const op = db.Sequelize.Op;

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
    search: function (req,res) {
        let busqueda = req.query.search;
        let relaciones = {
            include:[
                {association:'productosUsuarios'},
                {association:'comentarios'}
            ],
            where:[{[op.like]:"%"+busqueda+"%"}]
        }
        let criterio = {
            where:[{nombre:{[op.like]:"%"+busqueda+"%"}}]
        }
        Product.findAll(criterio, relaciones)
        .then(data => res.send(data))
        //return res.render("search-results")
        
    }
}


module.exports = indexController 





