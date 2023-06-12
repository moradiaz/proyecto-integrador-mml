const data= require("../data/data")
const db = require('../database/models') //importando los modelos -- db variable que nos trae sequelize 
const Product = db.Producto;
const User = db.Usuario;
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
        let busqueda = req.query.busqueda;
        
        let relaciones = {
            include:[
                {association:'productosUsuarios'},
                {association:'comentarios', include:[{association:'usuarioComentario'}]}
            ]
        };
        let criterio = {
            where:{
                [op.or]:[ 
                {nombreProducto:{[op.like]:"%"+busqueda+"%"}},
                {descripcion:{[op.like]:"%"+busqueda+"%"}}]
                },  
            order:[
                ['nombreProducto', 'DESC']
            ]
        }
        Product.findAll(criterio, relaciones) 
        .then(function(data){
            return res.render('search-results', {productos:data})
        })
        
        //.then(data => res.render('search-results'))
        //return res.render("search-results")
        
    }, 
    searchUsuarios: function(req, res){
        let busqueda = req.query.busqueda;
        
        let relaciones = {
            include:[
                {association: 'usuarioComentario'},
                {association:'productosUsuarios', include:[{association:'comentarios'}]}
            ]
        };
        let criterio = {
            where:{
                [op.or]:[ 
                {email:{[op.like]:"%"+busqueda+"%"}},
                {usuario:{[op.like]:"%"+busqueda+"%"}}]
                },  
            order:[
                ['usuario', 'DESC']
            ]
        }
        User.findAll(criterio, relaciones) 
        .then(function(data){
            return res.render('search-results-usuarios', {productos:data})
        })
    }
}


module.exports = indexController;





