const data= require("../data/data")
const db = require('../database/models')
const Product = db.Producto;
const Comentario = db.Comentario;

const productControllers =  {
    agregar: function (req,res) {
        return res.render("product-add", {data:data})
        
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