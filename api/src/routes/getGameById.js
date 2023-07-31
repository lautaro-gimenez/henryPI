const { Axios, default: axios } = require("axios");
const { Videogames } = require("../db");
require('dotenv').config();



const GetGameById = async(req,res)=>{
try { 
    let dataBase=null
    const api=process.env.API_KEY
    const id = req.params.idVideogame
    const gamesDB= await Videogames.findAll()
    console.log(id)
    gamesDB.map(game=>{
        console.log(game.dataValues.id)
        if (game.dataValues.id===id) {
            dataBase=game
        }
    })
    console.log('sosa')
    if (dataBase!==null) {
        return res.json(dataBase)
    }
    
    const response= await axios.get(`https://api.rawg.io/api/games/${id}?key=${api}`)
    
    return res.json(response.data)
} catch (error) {
    console.log(error)
    return res.status(404).send('no se encontró el videojuego' +error  )
}


}
module.exports={
    GetGameById
}