import style from './estilos/joinGame.module.css'
import { useState } from"react"


const Button=(props)=>{
    const[button,setButton]=useState(true)
    const[select,setSelect]=useState(true)
    const handleButton=(event)=>{
        
        if (button==false) {
            setButton(true)
            setSelect(true)

        }else{
            setButton(false)
            setSelect(false)
        }
        props.handle(event.target.value, button)
        
    }

    
        const estiloBoton = select ? style.boton : style.botonactive;
    
    return(
        <div>
            <button className={estiloBoton} onClick={handleButton}  value={props.id} status={button}>{props.genre}</button>
        </div>
    )
}

export default Button