const {Genress} =require('./db')
const { Axios, default: axios } = require("axios");
require('dotenv').config();

const genresDatabase= async ()=>{
    
    const api= process.env.API_KEY
    let genres= await axios.get(`https://api.rawg.io/api/genres?key=${api}`)
    genres=genres.data.results
    
    genres.map(async gener=>{
        try {
            if (!gener.id||!gener.name) {
                throw Error('no existe')
            }
            
            await Genress.findOrCreate({where:{
                id:gener.id,
                name: gener.name
            }})
        } catch (error) {
            console.log(error)
        }
        
    })
    

    

}

module.exports= {
    genresDatabase
}