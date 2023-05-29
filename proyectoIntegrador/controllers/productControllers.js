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
    }
}

module.exports = productControllers;