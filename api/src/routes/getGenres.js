const { Axios, default: axios } = require("axios")
require('dotenv').config();



const getGenres = async(req,res)=>{
try { 
    const api=process.env.API_KEY
    
    
    const response= await axios.get(`https://api.rawg.io/api/genres?key=${api}`)
    
    
    return res.json(response.data.results)
} catch (error) {
    return res.status(404).send('error al obtener los generos: '+error)
}


}
module.exports={
    getGenres
}