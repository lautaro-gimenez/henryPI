import image from '../utils/videogame.png'
import { NavLink } from 'react-router-dom'
import style from './estilos/joinGame.module.css'
const Landing= ()=>{
    return(
        <div>
            <h1 className={style.welcome}>bienvenido</h1>
            <img src={image} alt="" />
            <button className={style.submit}><NavLink to='/home'>home</NavLink></button>
            
        </div>
    )
}

export default Landing