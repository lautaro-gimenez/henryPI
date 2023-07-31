import axios from "axios"
import { useEffect, useState } from "react"
import style from './estilos/joinGame.module.css'
import Button from "./button"
import {validateDescription,validateFecha,validateGenres,validateImage,validateName,validatePlataformas,validateRating} from './validations'
const CreateGame=()=>{
        const[validations,setValidations]=useState()
        const[generMap,setGenerMap]=useState([])
        const [platforms,setPlatforms]= useState([])
        const [genres, setGenres]=useState([])
        const [ratings,setRatings]=useState(null)
        const [newGame,setNewGame]=useState({
            nombre:'',descripcion:'',plataformas:platforms,imagen:'',fechaDeLanzamiento:'',rating:null,genre:genres
        })
        
   
    
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
            setGenerMap(generos) 
            setNewGame((prevGame) => {
                return { ...prevGame, genre: genres };
              });
              setNewGame((prevGame) => {
                return { ...prevGame, plataformas: platforms };
              });
        }
        gen()
       
        
    },[genres,platforms])
    
    
    

    const changeNombre =(event)=>{setNewGame((preview)=>{
        return{...preview,
        nombre: event.target.value
        }
    })}
    const changeDescription =(event)=>{setNewGame((preview)=>{
        return{...preview,
        descripcion: event.target.value
        }
    })}
    const changePlataformas =(event)=>{
        
        let status= platforms
        if (event.target.checked==true) {
            status.push(event.target.value)
        }else{
            status= status.filter((plat)=> plat !== event.target.value)
        }
        setPlatforms(status)
        
        setNewGame(game=>{return{...game,plataformas:platforms}})
    }
    const changeImagen =(event)=>{
        setNewGame((preview)=>{
            return{...preview,
            imagen: event.target.value
            }
        })
        
    }
    const changeFecha =(event)=>{setNewGame((preview)=>{
        return{...preview,
            fechaDeLanzamiento: event.target.value
        }
    })}
    const changeRating = (event) => {
        setNewGame((prevGame) => {
            return { ...prevGame, rating: event.target.value };
          });
        
    }
    
    const changeGenre =(name, estado)=>{
        let gen=genres
        if (estado===true) {
            gen.push(name)
        }else{
            gen=gen.filter((g)=>g!==name)
        }
        setGenres(gen)
        setNewGame(game=>{return{...game,genre:genres}})
        
    }
    
    const sendVideogame=async ()=>{

        setValidations(true)
        if ( validateRating(newGame.rating)===true&&
        validateDescription(newGame.descripcion)===true&&
            validateFecha(newGame.fechaDeLanzamiento)===true&&
            validateGenres(newGame.genre)===true&&
            validateImage(newGame.imagen)===true&&
            validateName(newGame.nombre)===true&&
            validatePlataformas(newGame.plataformas)===true
           ) {
                
            try {
            await axios.post(`/createVideogames`, newGame)
                window.alert('su juego se subio correctamente')
            } catch (error) {
                window.alert('hubo un error: '+ error)
            }

        }else{
            window.alert('faltan datos')
        }
        
        
    }



    
    return(
        <div className={style.join}>
            
            <div className={style.espacio}>
                
            </div>
           
            <h1>Sube un videojuego</h1>
            <div className={style.diviciones}>
                <h4>Nombre: </h4>
                <input type="text" onChange={changeNombre}/> <br />
                {validations ? <p>{validateName(newGame.nombre)}</p>: <p></p>}
                <br />
            </div>

            <div className={style.diviciones}>
                <h4>URL de imagen: </h4>
                <input type="text" onChange={changeImagen}/> <br />
                {validations ? <p>{validateImage(newGame.imagen)}</p>: <p></p>}
                <br />
            </div>
            <div className={style.diviciones}>
                <h4>Description: </h4> <br />
                <textarea  onChange={changeDescription} cols="30" rows="10"></textarea>
                <br />
                {validations ? <p>{validateDescription(newGame.descripcion)}</p>: <p></p>}
                <br />
            </div>
            <div class={style.diviciones}>
                <h4>Plataformas: </h4>
                <br />
                <div className={style.plats}>

                    <label className={style.checkboxLabel}>
                        <input className={style.checkboxInput} type="checkbox" value='Playstation' onChange={changePlataformas}/>
                        <span className={style.checkboxCustom}></span>
                        Playstation
                    </label>
                    <br />
                    <label className={style.checkboxLabel}>
                        <input className={style.checkboxInput} type="checkbox" value='Xbox' onChange={changePlataformas}/>
                        <span className={style.checkboxCustom}></span>
                        Xbox
                    </label>
                    <br />
                    <label className={style.checkboxLabel}>
                        <input className={style.checkboxInput} type="checkbox" value='PC' onChange={changePlataformas}/>
                        <span className={style.checkboxCustom}></span>
                        PC
                    </label>
                    <br />
                    <label className={style.checkboxLabel}>
                        <input className={style.checkboxInput} type="checkbox" value='Switch' onChange={changePlataformas}/>
                        <span className={style.checkboxCustom}></span>
                        Switch
                    </label>
                    <br />
                    <label className={style.checkboxLabel}>
                        <input className={style.checkboxInput} type="checkbox" value='Android' onChange={changePlataformas}/>
                        <span className={style.checkboxCustom}></span>
                        Android
                    </label>
                    <br />
                    <label className={style.checkboxLabel}>
                        <input className={style.checkboxInput} type="checkbox" value='Apple' onChange={changePlataformas}/>
                        <span className={style.checkboxCustom}></span>
                        Apple
                    </label>
                </div>
            </div>
            
            {validations ? <p>{validatePlataformas(newGame.plataformas)}</p>: <p></p>}
            <br />
            <div className={style.diviciones}>
                <h4>Fecha de lanzamiento: </h4>
                <input type="date" onChange={changeFecha}/> <br />
                {validations ? <p>{validateFecha(newGame.fechaDeLanzamiento)}</p>: <p></p>}
                <br />
            </div>
            <div className={style.diviciones}>
                <h4>Rating: </h4>

                        <input type="number"  onChange={changeRating} min="0" max="5" />
                        <br />
                {validations ? <p>{validateRating(newGame.rating)}</p>: <p></p>}
            </div>


            <br />
            <div className={style.diviciones}>
                <h4>Generos: </h4>
                <div className={style.botones}>
                    {generMap.map(gen=>{return(
                        <Button
                        genre={gen.name}
                        handle={changeGenre}
                        id={gen.id}
                        
                        />
                    )})}
                </div>
                {validations ? <p>{validateGenres(newGame.genre)}</p>: <p></p>}
                <br />
            </div>
            <button className={style.submit} onClick={sendVideogame}>SUBIR JUEGO</button>
            <br/>
        </div>
    )
                }

export default CreateGame
