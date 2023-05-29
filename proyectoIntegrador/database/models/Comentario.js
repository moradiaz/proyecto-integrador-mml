module.exports=function (sequelize, dataTypes) {
    let alias= 'Comentario';
    let cols= {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER
        },
        idUsuario:{
            type:dataTypes.INTEGER

        },
        productos_id:{
            type:dataTypes.TEXT

        },
        comentario:{
            type:dataTypes.STRING
        },
        createdAt:{
            type:dataTypes.DATE,
            allowNull: false,
        },
        updatedAt:{
            type:dataTypes.DATE,
            allowNull: false,
        },
        deletedAt:{
            type:dataTypes.DATE,
            allowNull: true,
        }

        
        
    }
    let config={
        tableName:'tabla_productos', //el mismo nombre de la tabla 
        timestamps:false,
        underscored:true //si usamos guines bajos 
    }

    const Comentario = sequelize.define(alias,cols,config); //nos permite definir asignaciones entre un modelo y una tabla 
     Comentario.associate =function (models) {
        Comentario.belongsTo(models.Producto, {
            as:'comentarios',
            foreignKey:'productos_id',
        })
        
    }
    return Comentario;
}