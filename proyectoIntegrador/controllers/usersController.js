const data= require("../data/data")
const db = require('../database/models')
const User = db.Usuario;
const bcryptjs = require('bcryptjs');

const usersController = {
    perfil: function(req, res) {
        let id = req.params.id
        let relaciones = {
            include:[
                {association: 'usuarioComentario'},
                {association:'productosUsuarios', include:[{association:'comentarios'}]}
            
                
            ]
        }
        User.findByPk(id, relaciones)
        
        .then(function(data){
            return res.render('profile', {data:data})

        }).catch(function(error){
            console.log(error);
        })

        
    },
    editar: function (req, res) {
        return res.render('profile-edit', {data:data} )
    },
    store: function (req,res) {
        let errors= {}; //almacenamiento 
        if (req.body.mail==" "){ //VALIDANDO FORMULARIOS 
            errors.message = "El campo email esta vacío";
            res.locals.errors = errors;
            res.render("register")

           
        }
        else if (req.body.pass ==" "){
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
                    if (data != null){
                        errors.message = "El email ya existe!";
                        res.locals.errors = errors;
                        res.render("register");
                    }else{
                        let passEncriptada = bcryptjs.hashSync(req.body.pass,12);
                        let user= {
                            usuario: req.body.user,
                            email:req.body.mail,
                            password: passEncriptada, 
                            fecha: req.body.fechanacimiento, 
                            dni: req.body.documento, 
                            foto: req.body.foto
                        }
                        console.log(user);
                        User.create(user); 
                        res.redirect('/users/login');
                    }
                }) 
                .catch(error=>console.log(error))

        }
       
    },
    index: function (req,res){  
        res.render("register")
    },
    login: function (req,res) {
        return res.render("login")
        
    },
    ingresar: function(req, res){
        let errors = {};
        let info = req.body;
        let filtro ={
            where:[{email:info.mail}]
        };
        User.findOne(filtro)
        .then(result =>{
            if (result =! null){
                let check = bcryptjs.compareSync(info.password, result.password);
                if (check){
                    req.session.user = result.dataValues;
                    req.locals.user = result.dataValues;
                    if (info.recordame){
                        res.cookie("userId",result.dataValues.id,{maxAge:1000 *60 *10})
                    }
                    return res.redirect('/')
                }
                else{
                    errors.message ='Contraseña no coincide'
                    res.locals.errors = errors;
                    res.render('register')
                }
            }
        })


    }

    
     

        
    
    
}

module.exports = usersController;