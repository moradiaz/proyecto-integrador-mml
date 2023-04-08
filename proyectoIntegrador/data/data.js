const data ={
    usuario: { 
        email: "pablolima@gmail.com",
        nombreUsuario:"pablo_lima",
        contraseña:"pablito1234",
        fecha:16/05/1998,
        documento:41545127,
        foto: "/images/users/user_image.jpeg"
    },
    productos: [

        {id: 1,
        nombre: "Hyaluronic Cream",
        descripcion: "Hidratante facial con ácido hialuronico, ideal para pieles mixtas a grasas, con acabado glowy",
        fechaCarga: "15/03/23", 
        cover: "/images/products/skin-1.jpg"
        },
        {id: 2,
        nombre: "The Ordinary",
        descripcion: "Crema facial con vitamina C, ideal para todo tipo de piel. Actua como antioxidante y rejuvenecedora ",
        fechaCarga: "02/04/23",
        cover: "/images/products/skin-2.jpg"
        },
        {id: 3,
        nombre: "Drunk Elephant Oil",
        descripcion: "Oleo facial con antioxidantes, omega 6 y 9, que ayuda a restaurar tu piel, dejando un acabado glowy ",
        fechaCarga: "07/02/23",
        cover:"/images/products/skin-3.jpg"
        },
        {id: 4,
        nombre: "Drunk Elephant Cream",
        descripcion: "Crema facial, ideal para pieles secas y cansadas. Actua como barrera ante facotres estresantes ",
        fechaCarga: "19/05/23",
        cover:"/images/products/skin-4.jpg"
        },
        {id: 5,
        nombre: "Unseen Sunscreen",
        descripcion: "Protector solar hidratante con SPF 40, con acabado luminoso y un instantaneo glow ",
        fechaCarga: "06/04/23",
        cover:"images/products/skin-5.jpg"
        },
        {id: 6,
        nombre: "La Mer exfolator",
        descripcion: "Este exfoliante facial sensorial perfecciona la piel, elimina las toxinas presentes y la regenera ",
        fechaCarga: "13/06/23",
        cover:"/images/products/skin-6.jpg"
        },
        {id: 7,
        nombre: "Dermalogica",
        descripcion: "es un suave exfoliante enzimático a base de arroz que puedes usar a diario, está perfectamente indicado para tratar las jovenes pieles grasas y acnéicas con resultados increibles ",
        fechaCarga: "14/06/23",
        cover:"/images/products/skin-7.jpg"
        },
        {id: 8,
        nombre: "Drunk Elephant Body Lotion",
        descripcion: "Una loción ligera de rápida absorción con una mezcla de aceites humectantes que deja la piel con una sensación más suave, tersa y radiante.",
        fechaCarga: "01/01/23",
        cover:"/images/products/skin-8.jpg"
        },
        {id: 9,
        nombre: "Glossier Serum",
        descripcion: "Serum facial que conetiene potentes extractos a base de plantas funcionan para hacer que tu piel luzca más brillante, al instante y con el tiempo ",
        fechaCarga: "12/06/23",
        cover:"/images/products/skin-9.jpg"
        },
        {id: 10,
        nombre: "The Ordinary Serum",
        descripcion: "Serum facial que ayuda a mantener la correcta estructura de la piel. Retiene el agua en la epidermis, pues hidrata de forma natural",
        fechaCarga: "08/05/23",
        cover:"/images/products/skin-10.jpg"
        }

        
    ],
    comentarios: [
        {nombreUsuario: "Julieta_ruiz19",
        comentario: "Excelente producto!!",
        imagen: "./images/users/user_image.jpeg"
        },
        {nombreUsuario: "Luz__gutierrez11",
        comentario: "Me encanto, lo recomiento100%",
        imagen: "./images/users/user_image.jpeg"
        },
        {nombreUsuario: "pedro-colleta",
        comentario: "Me dejo la piel hermosa, nunca había visto algo así",
        imagen: "./images/users/user_image.jpeg"
        },
        {nombreUsuario: "claudia_fernadez00",
        comentario: "No justifica el precio, hay productos mejores con un precio más bajo",
        imagen: "./images/users/user_image.jpeg"
        },
        {nombreUsuario: "santiago_delia",
        comentario: "Mi piel esta como nueva",
        imagen: "./images/users/user_image.jpeg"
        }

    ]
    
}
module.exports = data;
