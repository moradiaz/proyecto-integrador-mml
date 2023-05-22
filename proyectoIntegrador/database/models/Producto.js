module.exports = function (sequelize, dataTypes) {
    let alias = 'Producto';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        }, 
        idUsuario:{ 
            type: dataTypes.INTEGER
        }, 
        nombreProducto: {
            type: dataTypes.STRING
        }, 
        descripcion: {
            type: dataTypes.STRING(1000)
        }, 
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false
        }, 
        updatedAt:{
            type: dataTypes.DATE, 
            allowNull: false
        }, 
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: 'prodcutos', 
        timestamps: false, 
        underscored: true
    }
    const Producto = sequelize.define(alias,cols,config);
    Producto.associate = function(models) {
        Producto.belongsToMany(models.Comentario, {
            as:'comentarios', 
            through: 'comentarios',
            foreignKey: 'productos_id', 
            otherKey: 'usuarios_id', 
            timestamps: false
        });
        Producto.belongsTo(models.Usuario, {
            as: 'usuarios', 
            foreignKey: 'idUsuario'
        }) 
    
    }
    return Producto;
}