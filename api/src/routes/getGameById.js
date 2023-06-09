const { Axios, default: axios } = require("axios")
require('dotenv').config();



const GetGameById = async(req,res)=>{
try { 
    const api=process.env.API_KEY
    const id = req.params.idVideogame
    
    const response= await axios.get(`https://api.rawg.io/api/games/${id}?key=${api}`)
    
    return res.json(response.data)
} catch (error) {
    return res.status(404).send('no se encontró el videojuego' +error  )
}


}
module.exports={
    GetGameById
}