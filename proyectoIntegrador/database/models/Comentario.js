module.exports=function (sequelize, dataTypes) {
    let alias= 'Comentario'; //el nombre de la tabla en singular y con camelcase
    let cols= {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER
        },
        usuariosId:{
            type:dataTypes.INTEGER

        },
        productosId:{
            type:dataTypes.INTEGER

        },
        comentario:{
            type:dataTypes.STRING
        },
       /*  createdAt:{
            type:dataTypes.DATE,
            allowNull: false,
        },
        updatedAt:{
            type:dataTypes.DATE,
            allowNull: false,
        }, */
        deletedAt:{
            type:dataTypes.DATE,
            allowNull: true,
        }

        
        
    }
    let config={
        tableName:'comentarios', //el mismo nombre de la tabla 
        timestamps:false,
        underscored:false //si usamos guines bajos 
    }

    const Comentario = sequelize.define(alias,cols,config); //nos permite definir asignaciones entre un modelo y una tabla 
     Comentario.associate =function (models) {
        Comentario.belongsTo(models.Producto, {
            as:'comentarios',
            foreignKey:'productosId',
        }),
        Comentario.belongsTo(models.Usuario,{
            as: 'usuarioComentario',
            foreignKey: 'usuariosId'
        })
        
    }
    return Comentario;
}