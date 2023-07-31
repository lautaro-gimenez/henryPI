import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import style from './estilos/detail.module.css'


const Detail= ()=>{
    const [game,setGame] =useState({})
   
    const {id}= useParams()
    const peticion= async()=>{
        try {
            const gameDetail= await axios.get(`/videogames/${id}`)
        if (gameDetail.data.name) {
            setGame(gameDetail.data)
            console.log(gameDetail)
        }
        } catch (error) {
            console.log(error)
        }   
    }
    useEffect(()=>{
        peticion()
       
    },[id])
    // console.log(game.platforms.map(plat=>{return(
    //     plat.platform.name
    // )}))
    return(
        <div className={style.fondo}>
            <div className={style.detail}>
                    <div className={style.espacio}>
                    </div>
                
                <h2>{game.name}</h2>
                <h4>Fecha de lanzamiento: {game.released}</h4>
                <img src={game.background_image} alt="" />
                <div className={style.parrafo} dangerouslySetInnerHTML={{ __html: game.description }} />
                <img src={game.background_image_additional} alt="" />
                <div className={style.contenedor}>
                    <div className={style.platforms}>
                        <h3>Disponible para:</h3>
                        
                        {game.platforms?.map(pla=>{return(
                        <h4>{pla.platform.name}</h4>)})}
                    </div>
                    <div className={style.generos}>
                        <h3>Generos:</h3>
                        {game.genres?.map((gen)=>{return(
                            <h4>{gen.name}</h4> 
                        )})}
                    </div>
                </div>
                <div className={style.rating}>
                    <h4>Rating:</h4>
                    <h3>{game.rating}</h3>
                </div>
            </div>
        </div>
    )
}

export default Detail