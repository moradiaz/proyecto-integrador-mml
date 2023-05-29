module.exports = function(sequelize, dataTypes){
    let alias = 'Usuario'
    let cols ={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.STRING
        },
        usuario:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        foto:{
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE
        },
        dni:{
            type: dataTypes.INTEGER.UNSIGNED
        },
        createdAt:{
            type: dataTypes.DATE,
            allowNull: false
        },
        updatedAt:{
            type: dataTypes.DATE,
            allowNull: false
        },
        deletedAt:{
            type: dataTypes.DATE,
            allowNull: true
        }
    
        
    } 
    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: false
    }
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto,{
            as: 'productosUsuarios',
            foreignKey: 'idUsuario'
        })
    }

    return Usuario;
}

