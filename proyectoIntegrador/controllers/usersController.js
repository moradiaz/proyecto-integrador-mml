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
    
    login: function (req,res) {
        if(req.session.user != undefined) {
            return res.redirect('/')
        }
        else {
            return res.render("login")
        }
    },
    processLogin: function(req, res){
        //res.send(req.body)
        let errors = {};
        let {mail, password, recordame} = req.body;
        let filtro ={
            where:[{email:mail}]
        };
        User.findOne(filtro)
        .then(result =>{
            if (result == null){
                errors.message = 'El usuario no existe';
                res.locals.errors = errors;
                return res.render('login')
            }
            else{
                //res.send(result)
                let check = bcryptjs.compareSync(password, result.password);
                if (check){
                    req.session.user = result.usuario;
                    req.session.idUser = result.id;
                    if (recordame){
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


    },
    logout: function(req, res){
        req.session.destroy()
        res.clearCookie('userId')
        res.redirect('/') 
    }   
    
}

module.exports = usersController;