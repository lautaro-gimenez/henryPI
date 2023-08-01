const { DataTypes, Sequelize, STRING } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    background_image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    genres:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull:false
    },
    db:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
    
  },{timestamps: false});
};
