const { Axios, default: axios } = require("axios");
const { Videogames } = require("../db");
const Videogame = require("../models/Videogame");
require('dotenv').config();



const CreateGame = async(req,res)=>{
try { 
    
    const {nombre,descripcion,plataformas,imagen,fechaDeLanzamiento,rating }= req.body
    
    if (!nombre||!descripcion||!plataformas||!imagen||!fechaDeLanzamiento||!rating) res.status(400).send('faltan datos')
       
        await Videogames.findOrCreate({where:{
            
            nombre: nombre,
            descripcion: descripcion,
            plataformas: plataformas,
            imagen: imagen,
            fechaDeLanzamiento: new Date(fechaDeLanzamiento),
            rating:rating
        }})
    
    
    const juegos= await Videogames.findAll()
    
    
    return res.status(200).json(juegos)
} catch (error) {
    return res.status(407).send('no se encontró el videojuego' +error  )
}


}
module.exports={
    CreateGame
}