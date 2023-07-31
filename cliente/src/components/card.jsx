import { useNavigate } from 'react-router-dom'
import style from './estilos/home.module.css'

const Card = (props)=>{
    const navigate= useNavigate()
    const detail=()=>{navigate(`/games/${props.id}`)}
    return(
        <div className={style.card} key={props.id} onClick={detail}>
            
            <div className={style.cardImage}>
                <img src={props?.image} alt="" />
            </div>
            
            <h5>{props?.name}</h5>
            <div className={style.generos}>
            {props?.genres.map((gen)=>{return (
                <>
                 <p className={style.cardP}>{gen.name} </p>
                 </>
            )})}
            </div>    
            
        </div>
    )
}

export default Card