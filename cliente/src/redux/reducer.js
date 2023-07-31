
let initialState= {
    gamesInit:[],
    gamesSearch:[],
    gamesOriginal:[]
}
export const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'ALL_GAMES':
            return{
                ...state, gamesInit:action.payload,
                gamesOriginal:action.payload
            }

        case 'SEARCH_GAMES':
            return{
                ...state, gamesSearch: action.payload
            }

        case 'CLEAR':
            return{
                ...state, gamesSearch: action.payload
            }
        case 'DESCENDENT':
            return{
                ...state, gamesInit:action.payload
            }
        case 'ASCENDENT':
            return{
                ...state, gamesInit:action.payload
            }
            
        
        default: return {
            ...state
        }
            
    }
}