import { useState } from 'react'
import style from './estilos/home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { DescendentAll, AscendentALL } from '../redux/actions'
const Ordenate =(props)=>{
    const dispatch=useDispatch()
    const state= useSelector((state)=>state)
    const[des,setDes]=useState(false)
    const[asc,setAsc]=useState(false)
    const [alfab,setAlfab]=useState(false)
    const[rating,setRating]=useState(false)
    const ascendent=(event)=>{
         if (asc===false) {
        setDes(false)
        setAsc(true)
        props.Desc(false)
       }else{
        setAsc(false)
       }
       
    }
    const descendent=(event)=>{
        if (des===false) {
            setDes(true)
            setAsc(false)
           }else{
            setDes(false)
           }
       props.Desc(!des)
    }
     const alfabetic=()=>{
        if (alfab===false) {
            setAlfab(true)
            setRating(false)
        }else{
            setAlfab(false)
        }
        props.Alfb(!alfab)
     }

    const ordenateRating=()=>{
        if (rating===false) {
            setRating(true)
            
        }else{
            setRating(false)
        }
        props.Rating(!rating)
    }
    

    return(
        <div>
            <h6>ordenar de forma:</h6> 
            <input id="rating" type="checkbox" onChange={ordenateRating} checked={rating} className={style.checkbox} />
             <label for="rating" className={style.labels}>por rating</label>
              <br />
             <input id="alfabeticamente" type="checkbox" onChange={alfabetic} checked={alfab} className={style.checkbox}/>
             <label for="alfabeticamente" className={style.labels}>alfabeticamente</label>
              <br />
              <input id="option" type="checkbox" onChange={ascendent}checked={asc} className={style.checkbox}/>
             <label for="option" className={style.labels}>ascendente</label>
            <br />
             <input id="options" type="checkbox" onChange={descendent} checked={des} className={style.checkbox}/>
             <label for="options" className={style.labels}>descendente</label>
            
            
        </div>
    )

}
export default Ordenate