const data= require("../data/data")
const db = require('../database/models') //importando los modelos -- db variable que nos trae sequelize 
const Product = db.Producto;
const User= db.Usuario  //importamos el modelo de usuario y lo almacenamos en User 
const bcryptjs = require('bcryptjs');

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
    index: function (req,res){  
        res.render("register")
    },
  
    store: function (req,res) {
        let errors= {}; //almacenamiento 
        if (req.body.mail==" "){ //VALIDANDO FORMULARIOS 
            errors.message = "El campo email esta vacío";
            res.locals.errors = errors;
            res.render("register")

           
        }
        else if (req.body.pass ==""){
            errors.message = "El campo constraseña esta vacio";
            res.locals.errors = errors;
            res.render("register")
        }
        else{
            let criterio = {
                email: req.body.mail
            }
            User.findOne({where: [criterio]})
                .then(data=> {
                    errors.message = "El email ya existe!";
                    res.locals.errors = errors;
                    res.render("register");
                }) 
                .catch(error=>console.log(error))

        }
        let passEncriptada = bcryptjs.hashSync(req.body.pass,12);
        let user= {
            usuario: req.body.user,
            email:req.body.mail,
            password: passEncriptada
        }
        User.create(user); 
        res.redirect('/perfil');
        

        
    },
    login: function (req,res) {
        return res.render("login")
        
    },
    ingresar: function (req,res){

    },

    search: function (req,res) {
        return res.render("search-results")
        
    }
}


module.exports = indexController 





