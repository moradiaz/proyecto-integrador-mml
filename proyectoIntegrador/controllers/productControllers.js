const data= require("../data/data")
const db = require('../database/models')
const Product = db.Producto;
const Comentario = db.Comentario;

const productControllers =  {
    agregar: function (req,res) {
        return res.render("product-add")   
    },
    storeProduct: function (req,res) {
        if (req.session.user != undefined) {
            let producto = {
             fotoProducto: req.body.imagen,
             nombreProducto: req.body.nombreproducto, 
             descripcion: req.body.descripcion, 
             idUsuario: req.session.idUser
            } 
            Product.create(producto)
            .then(function (product) {
                
                res.redirect('/') 
            })
            .catch(function(error){
                console.log(error);
            })
         }
         else {
             res.redirect('/register')
         }
    },
    producto: function (req, res) {
        let id = req.params.id
        let relaciones = {
            include:[
                {association: 'comentarios', include:[{association:'usuarioComentario'}]},
                {association:'productosUsuarios'}
               
                
            ]
        }
        Product.findByPk(id, relaciones)
        
        .then(function(data){
            
            return res.render('product', {data:data, comentarios: data.comentarios})

        }).catch(function(error){
            console.log(error);
        })
        
    }
        
       // return res.render('product', {data:data})
    
}

module.exports = productControllers;