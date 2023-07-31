import { useState } from "react"
import { useDispatch } from "react-redux"
import { clear, searchGames } from "../redux/actions"
import { NavLink } from "react-router-dom"
import Search from "./search"
import { useLocation, useNavigate } from "react-router-dom"
import style from './estilos/nav.module.css'

const Nav = ()=>{
   const navigate = useNavigate()
   
    const [search,setSearch]= useState('')
    const dispatch = useDispatch()
    const searcher =()=>{
        if (search !== '') {
            dispatch(clear())
             dispatch(searchGames(search))
        }
    }
    const link = ()=>{
        if (!search) {
            return false
        }else {return true}
    }
    
    const onKey = (event)=>{
       
        if (event.key=='Enter') {
            
            searcher()
            if (search!='') {
                navigate('/search')
            }
            
        }
        
    }

    const onChange = (event)=>{
        setSearch(event.target.value) 
    }



    
    return(
        <div className={style.nav}>
             <NavLink to='/home' className={style.navlink}>Home</NavLink>
             <NavLink to='/createVideogame' className={style.navlinkSube}>Sube un Videojuego</NavLink> 

            <div className={style.searchBar}>
                <button onClick={searcher} className={style.butonBuscar}>
                            {link()? (
                        <NavLink to="/search" activeClassName="active" className={style.navBuscar}>&#128269;</NavLink>
                    ) : (
                        <NavLink  activeClassName="active" className={style.navBuscar}>&#128269;</NavLink>
                    )}
                </button>
                <input type="search" onChange={onChange} onKeyDown={onKey} className={style.navBar}/>
            </div>      
            
        </div>
    )
}

export default Nav