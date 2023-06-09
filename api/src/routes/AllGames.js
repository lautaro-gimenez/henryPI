const { Axios, default: axios } = require("axios")
require('dotenv').config();



const AllGames = async(req,res)=>{
try { 
    const api=process.env.API_KEY
    
    const response= await axios.get(`https://api.rawg.io/api/games?key=${api}`)
    
    return res.json(response.data.results)
} catch (error) {
    return res.status(404).send(error)
}


}
module.exports={
    AllGames
}