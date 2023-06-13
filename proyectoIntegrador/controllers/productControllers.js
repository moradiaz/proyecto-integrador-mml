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
                {association:'productosUsuarios'}], 
                order: [[{model: Comentario, as: 'comentarios'}, 'createdAt', 'DESC']]
        }
        Product.findByPk(id, relaciones)
        
        .then(function(data){
           // return res.send(data)
            return res.render('product', {data:data, comentarios: data.comentarios})

        }).catch(function(error){
            console.log(error);
        })
        
    }, 
    borrar: function (req,res) {
        let id = req.body.id

        let relaciones = {
            include:[
                {association: 'comentarios', include:[{association:'usuarioComentario'}]},
                {association:'productosUsuarios'}
            ]        
    } 
    Product.findByPk (id, relaciones) 
    .then(function (data) {
       
        if (req.session.idUser == data.idUsuario) {
            Product.destroy({ where: [{id: id}]})
            res.redirect('/')
        }
        else {
            let errors = {}
            errors.message = "No puede borrar este producto"
            res.locals.errors = errors; 
            return res.render('product', {data:data, comentarios: data.comentarios})
        }
 
    })
    .catch (function (error) {
        console.log(error);
    })
    }, 
    editar: function(req,res){
        let id = req.params.id
       
        Product.findByPk (id) 
        .then(function (data) {
       
            return res.render("product-edit" , {data:data, comentarios: data.comentarios})
        })
       
        
    },
    editarPost: function (req,res){
        let id = req.body.id

    Product.findByPk (id) 
    .then(function (data) {
     
        if (req.session.idUser == data.idUsuario) {
            Product.update({
                fotoProducto: req.body.imagen,
                nombreProducto: req.body.nombreproducto,
                descripcion:req.body.descripcion,
                
            },{where: [{id: id}]})
            res.redirect('/')
        }
        else {
            let errors = {}
            errors.message = "No se puede editar este producto"
            res.locals.errors = errors; 
            return res.render('product-edit', {data:data, comentarios: data.comentarios})
        }
 
    })
    .catch (function (error) {
        res.send({error})
        console.log(error);
    })
    }, 
    crearComentario: function (req,res) {
        Comentario.create({
          usuariosId: req.session.idUser, 
          productosId: req.params.id, 
          comentario: req.body.comentario
        })
        .then((data) => {
            return res.redirect('/')
        })
        .catch((error) => {
            res.send(error)
        })
    }
    
}
module.exports = productControllers;