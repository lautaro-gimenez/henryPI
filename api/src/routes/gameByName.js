const { Axios, default: axios } = require("axios")
require('dotenv').config();



const getGameByName = async(req,res)=>{
try { 
    const api=process.env.API_KEY
    const game= req.query.game
    
    const response= await axios.get(`https://api.rawg.io/api/games?search=${game}&key=${api}`)
    const games= response.data.results.slice(0,15)
    
    return res.json(games)
} catch (error) {
    return res.status(404).send('no se encontraron resultados '+error)
}


}
module.exports={
    getGameByName
}