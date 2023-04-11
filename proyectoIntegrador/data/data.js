const data ={
    usuario: { 
        email: "pablolima@gmail.com",
        nombreUsuario:"pablo_lima",
        contraseña:"pablito1234",
        fecha:16/05/1998,
        documento:41545127,
        foto: "/images/users/pablo_image.png"
    },
    productos: [

        {
        nombre: "Hyaluronic Cream",
        descripcion: "Hidratante facial con ácido hialuronico, ideal para pieles mixtas a grasas, con acabado glowy",
        fechaCarga: "15/03/23", 
        cover: "/images/products/skin-1.jpg"
        },
        {
        nombre: "The Ordinary",
        descripcion: "Crema facial con vitamina C, ideal para todo tipo de piel. ",
        fechaCarga: "02/04/23",
        cover: "/images/products/skin-2.jpg"
        },
        {
        nombre: "Drunk Elephant Oil",
        descripcion: "Oleo facial con antioxidantes, omega 6 y 9, ",
        fechaCarga: "07/02/23",
        cover:"/images/products/skin-3.jpg"
        },
        {
        nombre: "Drunk Elephant Cream",
        descripcion: "Crema facial, ideal para pieles secas y cansadas.  ",
        fechaCarga: "19/05/23",
        cover:"/images/products/skin-4.jpg"
        },
        {
        nombre: "Unseen Sunscreen",
        descripcion: "Protector solar hidratante con SPF 40, con acabado luminoso. ",
        fechaCarga: "06/04/23",
        cover:"images/products/skin-5.jpg"
        },
        {
        nombre: "La Mer exfolator",
        descripcion: "Este exfoliante facial sensorial perfecciona la piel.",
        fechaCarga: "13/06/23",
        cover:"/images/products/skin-6.jpg"
        },
        {
        nombre: "Dermalogica",
        descripcion: "es un suave exfoliante enzimático a base de arroz. ",
        fechaCarga: "14/06/23",
        cover:"/images/products/skin-7.jpg"
        },
        {
        nombre: "Drunk Elephant Body Lotion",
        descripcion: "Una loción ligera de rápida absorción con una mezcla de aceites humectantes.",
        fechaCarga: "01/01/23",
        cover:"/images/products/skin-8.jpg"
        },
        
        
    ],
    comentarios: [
        {nombreUsuarios: "Julieta_ruiz19",
        comentario: "Excelente producto!!",
        imagen: "/images/users/user_image.jpeg"
        },
        {nombreUsuarios: "Luz__gutierrez11",
        comentario: "Me encanto, lo recomiento100%",
        imagen: "/images/users/user_image.jpeg"
        },
        {nombreUsuarios: "pedro-colleta",
        comentario: "Me dejo la piel hermosa, nunca había visto algo así",
        imagen: "/images/users/user_image.jpeg"
        },
        {nombreUsuarios: "claudia_fernadez00",
        comentario: "No justifica el precio, hay productos mejores con un precio más bajo",
        imagen: "/images/users/user_image.jpeg"
        },
        {nombreUsuarios: "santiago_delia",
        comentario: "Mi piel esta como nueva",
        imagen: "/images/users/user_image.jpeg"
        }

    ]
    
}
module.exports = data;
