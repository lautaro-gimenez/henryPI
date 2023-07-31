
import { useSelector } from "react-redux"
import Card from "./card"
import style from './estilos/home.module.css'
import { useDispatch } from "react-redux"
import { clear } from "../redux/actions"
import { useEffect, useState } from "react"
import Ordenate from "./ordenate"
const Search = (props)=>{
    
    const [gener,setGener]=useState('default')
    const state = useSelector(state=>state)
    const dispatch= useDispatch()
    useEffect(() => {
        
      }, []);
      const changeGener=(id)=>{
        setGener(id)
      }
    
  if (state.gamesSearch.length===0) {
    return(
      <h1 className={style.loading}>loading...</h1>
    )
  }
    return(
        <div>
            <div className={style.espacio}>

          </div> 
            
            <div className={style.cardContentSearch}>
            {state.gamesSearch.map((game)=>{ return(
                <Card
                name= {game?.name}
                image={game?.background_image}
                genres={game?.genres}
                key= {game?.id}
                id={game?.id}
                />)
            })}
          </div>
           

        </div>
    )
}

export default Search