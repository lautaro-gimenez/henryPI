const { DataTypes } = require("sequelize")


module.exports=(sequelize)=>{
    sequelize.define('genres',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        nombre:{
            type:DataTypes.STRING,
            allownull: false
        }
    })
}