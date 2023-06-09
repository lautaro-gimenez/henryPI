const { Router } = require('express');
const {AllGames} =require('./AllGames') 
const {GetGameById} =require('./getGameById')
const{ getGameByName}=require('./gameByName');
const { CreateGame } = require('./CreateGame');
const { getGenres } = require('./getGenres');
require('../routes/')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames',(req,res)=>{
    AllGames(req,res)
})

router.get('/videogames/:idVideogame',(req,res)=>{
    GetGameById(req,res)
})

router.get('/name',(req,res)=>{
    
    getGameByName(req,res)
})

router.post('/createVideogames',(req,res)=>{
    CreateGame(req,res)
})

router.get('/genres',(req,res)=>{
    getGenres(req,res)
})
module.exports = router;
