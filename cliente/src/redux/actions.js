import axios from 'axios'
import { useSelector } from 'react-redux';

export const initGames=()=>{
    
    return async (dispatch)=>{try {
        
        const allGame = await axios.get(`/videogames`)
        
        const games= allGame.data
        return(
            dispatch({
                type: 'ALL_GAMES',
                payload: games
            })
        )
    } catch (error) {
        console.log(error)
    }}
    
}

export const searchGames = (name)=>{
    name= name.replace(/ /g, '-')
    return async (dispatch)=>{
        try {
            const game = await axios.get(`/name?game=${name}`)
            
            return(
                dispatch({
                    type:'SEARCH_GAMES',
                    payload: game.data
                })
            )
        } catch (error) {
            console.log(error)
        }
    }
}

export const clear = ()=>{
    
       return {
            type: 'CLEAR',
            payload:[]
        }
    
}

