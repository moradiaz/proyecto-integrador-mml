const data= require("../data/data")
const db = require('../database/models')
const Product = db.Producto;
const Comentario = db.Comentario;

const productControllers =  {
    agregar: function (req,res) {
        return res.render("product-add", {data:data})
        
    },
    producto: function (req, res) {
        return res.render('product', {data:data})
    },
    all: function(req, res, next) {
        let relaciones = {
            include:[
                {association:'productos_usuarios'},
                {association:'comentarios'}
            ]
        }
        Product.findAll(relaciones)
        .then(function(data){
            return res.render('index', {title: 'mi título', data:data});

        }).catch(function(error){
            console.log(error);
            res.send({error})
        })
}
}

module.exports = productControllers;