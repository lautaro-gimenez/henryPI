import { useState } from "react"
import axios, { all } from 'axios'
import Card from "./card"
import { useEffect } from "react"
import style from './estilos/home.module.css'
import Ordenate from "./ordenate"
import Filter from "./filter"


const Home= ()=>{
    const[games,setGames]=useState([])
    const[gener,setGener]=useState('default')
    const[descendente,setDescendente]=useState(false)
    const[alfab,setAlfab]=useState(false)
    const[ratings,setRatings]=useState(false)
    const[onlyDB,setOnlyDB]=useState(false)
    const [excluseDB,setExcluseDB]=useState(false)
   
    useEffect( ()=>{
       async function d() {
        try {
            if (games.length===0) {
                const juegos= await axios.get(`/videogames`);
                setGames(juegos.data)
            }
            
       
        } catch (error) {
            window.alert(error)
        }
       
       }
       d()
                 
    },[gener])
    function dividirArray (array, maximo) {
        const dividedArrays = [];
          
        for (let i = 0; i < array.length; i += maximo) {
            const chunk = array.slice(i, i + maximo);
            dividedArrays.push(chunk);
        }
          
         return dividedArrays;
    }
    const searchGenerById=(game)=>{
            
            
            for (let i = 0; i < game.genres?.length; i++) {
                
                if (gener==='default') {
                    return true
                }
                if (game.genres[i].id==gener) {
                    return true
                }
            }
            return false
        
        
   }
   const incluirDB=(game)=>{
    if (game.db) {
        return true
    }else{
        return false
    }
   }
    let juegos=[]
    
    games?.map((gam)=>{
        
        if (searchGenerById(gam)) {
            juegos.push(gam)
        }
    })
    let juegosCompletos=juegos
    if (onlyDB===true) {
        let juegosIncluidos=[]
        let juegosExlcuidos=[]
        juegos.map(juego=>{
            if (incluirDB(juego)) {
                juegosIncluidos.push(juego)
            }else{juegosExlcuidos.push(juego)}
            
        })
        juegos=juegosIncluidos
    }
    if (excluseDB===true) {
        let juegosIncluidos=[]
        let juegosExlcuidos=[]
        juegos.map(juego=>{
            if (incluirDB(juego)) {
                juegosIncluidos.push(juego)
            }else{juegosExlcuidos.push(juego)}
            
        })
        juegos=juegosExlcuidos
    }
    
    
    if (ratings===true) {
        juegos= juegos.sort((a, b) => Number(b.rating) - Number(a.rating));
          
          
    }
    

    if (alfab===true) { 
         juegos = juegos.sort((a, b) => {
            
            const nombreA = a.name.toLowerCase();
            const nombreB = b.name.toLowerCase();
            
            if (nombreA < nombreB) {
              return -1;
            }
            if (nombreA > nombreB) {
              return 1;
            }
            return 0;
          });
    }
    
    let juegosDivididos= dividirArray(juegos,15)
   
    const [page,setPage]=useState(0)
    const descendent=(bolean)=>{
           setDescendente(bolean)
    }
    const alfabetic=(bolean)=>{
        setAlfab(bolean)
    }
    const ordenateRating=(bolean)=>{
        setRatings(bolean)
    }
    const soloDB=(bolean)=>{
        setOnlyDB(bolean)
        if (onlyDB===true) {
            setExcluseDB(false)
        }
        if (excluseDB===true) {
         setOnlyDB(false)   
        }
       
    }
    const notDB=(bolean)=>{
        
        setExcluseDB(bolean)
        if (excluseDB===true) {
         setOnlyDB(false)   
        }
        if (onlyDB===true) {
            setExcluseDB(false)
        }
        
    }

    
    if (descendente===true) {
        let juegosReverse=juegos.reverse()
        const juegosDivididosReverse=dividirArray(juegosReverse,15)
        juegosDivididos=juegosDivididosReverse
    }
   
    const mostrarPrev=()=>{
        if (page>0) {
            return(<>
            <button className={style.button}onClick={prevHandler}>{page}</button>
            <h3>&lt;&lt;</h3>
            </>)
        }
    }
    const mostrarNext=()=>{
        if (page<juegosDivididos.length-1) {
            return(<>
            <h3>&gt;&gt;</h3>
            <button className={style.button} onClick={nextHandler}>{page+2}</button>
            </>)
        }
    }
    const prevHandler= ()=>{
        setPage(page -1)}
    const nextHandler=()=>{
        setPage(page+1)}
    const changeGener=(id)=>{
        setGener(id)
    }
        
        if (juegosDivididos.length!==0) {
            if (juegosDivididos[page]==undefined) {
            setPage(page -1)
        }
        }
        
    
    
      
    
    
   
   if (games.length===0) {
    
    return(
        <div>
            <h1 className={style.loading}>loading...</h1>
        </div>
    )
    
   }
   console.log(games)
  
   
    return(
        <div>
            <div className={style.espacio}>

        </div>
            
            <div className={style.filters}>
                <Ordenate
                Desc={descendent}
                Alfb={alfabetic}
                Rating={ordenateRating}
                />
                <Filter
                changeGener={changeGener}
                soloDB={soloDB}
                notDB={notDB}
                />
                
            </div>

            <div className={style.cardContent} >
                {juegosDivididos[page]?.map((game)=>{return(
                    <Card
                    name= {game.name}
                    image={game.background_image}
                    genres={game.genres}
                    key= {game.id}
                    id={game.id}
                    />)
                    
                    
                })}
            </div>

        <div className={style.butons}>

                {mostrarPrev()}
                
                <h2>{page +1}</h2>
                
                {mostrarNext()}

        </div>
        </div>
    )
}

export default Home