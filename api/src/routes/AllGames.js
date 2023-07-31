const { Axios, default: axios } = require("axios");
const { Videogames } = require("../db");
require('dotenv').config();



const AllGames = async(req,res)=>{
try { 
    const api=process.env.API_KEY
    let juegos
    let juego=[]
    for (let i = 1; i < 6; i++) {
        let response =await axios.get(`https://api.rawg.io/api/games?key=${api}&page=${i}`)
         juegos=response.data.results 
         juego=[...juego, ...juegos]
    }
    const juegosDB=await Videogames.findAll()
    let  allJuegosDB=juegosDB.map(game=> game.dataValues)
    console.log(allJuegosDB)
    if (juegosDB[0]) {
        return res.json([...juego,...allJuegosDB])
    }
    return res.json(juego)
} catch (error) {
    
    return res.status(404).send(error)
}


}
module.exports={
    AllGames
}