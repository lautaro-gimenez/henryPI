const { Videogames, Genress } = require("../db");
require('dotenv').config();

const CreateGame = async (req, res) => {
  try {
    const { nombre, descripcion, plataformas, imagen, fechaDeLanzamiento, rating, genre } = req.body;

    if (!nombre || !descripcion || !plataformas || !imagen || !fechaDeLanzamiento || !rating) {
      return res.status(400).send('Faltan datos en el cuerpo de la solicitud.');
    }
    const paltaformas= plataformas.map(plat=>{return({
      platform:{
      id:null,
      name:plat
    }}
    )})
    
    const generos = await Promise.all(req.body.genre?.map(async num => {
      const g = await Genress.findByPk(Number(num));
      return g.dataValues;
    }));

    const [juego] = await Videogames.findOrCreate({
      where: {
        name: nombre,
        description: descripcion,
        platforms: paltaformas,
        background_image: imagen,
        released: new Date(fechaDeLanzamiento),
        rating: rating,
        genres: generos,
        db: true
      }
    });

    

    return res.status(201).json(juego);
  } catch (error) {
    console.log(error);
    return res.status(407).send('No se pudo crear el videojuego.' + error);
  }
};

module.exports = {
  CreateGame
};