import axios from "axios"
import { useEffect, useState } from "react"
import style from './estilos/home.module.css'
const Filter=(props)=>{
    
    const[genres,setGenres]=useState([])
    const hanlderGener=(event)=>{
        props.changeGener(event.target.value)
    }
    useEffect(()=>{
        async function gen() {
            let generos=[]
            const response= await axios.get(`/genres`)
            response.data.map((gen)=>{
                generos.push({
                    name:gen.name,
                    id:gen.id 
                })
            })
            setGenres(generos) 
        }
        gen()
        
    },[])

    const[onlyDB,setOnlyDB]=useState(false)
    const[notDB,setNotDB]=useState(false)
    const db=(event)=>{
        if (onlyDB===false) {
       setOnlyDB(true)
       setNotDB(false)
       props.soloDB(!onlyDB)
      }else{
       
       setOnlyDB(false)
      }
      props.soloDB(!onlyDB)
   }
   const noDb=(event)=>{
       if (notDB===false) {
           setOnlyDB(false)
           setNotDB(true)
          }else{
           
           setNotDB(false)
          }
      props.notDB(!notDB)
   }
    return(
        <div>
            <h6>filtrar por genero</h6>
            <select  onChange={hanlderGener}>
                <option >default</option>
                {genres.map((gen)=>{
                return(
                    
                    <>
                    <option value={gen.id}>{gen.name}</option>
                    </>
                )}
                )}
            
            </select>

            <h6>Origen</h6>
            <input id="db" type="checkbox" onChange={db}checked={onlyDB} className={style.checkbox}/>
             <label for="db" className={style.labels}>Solo de la DataBase</label>
            <br />
             <input id="notDb" type="checkbox" onChange={noDb} checked={notDB} className={style.checkbox}/>
             <label for="notDb" className={style.labels}>Excluir los de la DataBase</label>
        </div>
    )
}

export default Filter