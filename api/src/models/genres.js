const { DataTypes } = require("sequelize")


module.exports=(sequelize)=>{
    sequelize.define('genress',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING,
            allownull: false
        }
        
            
          
    },{timestamps: false,})
}