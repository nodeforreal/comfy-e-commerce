import {GET_SEARCH,SET_CATEGORY} from '../action';

const filterReducer = (state,{type,payload})=>{    
    switch (type){
        case GET_SEARCH:
        return {...state, searchQuery: payload}
        
        case SET_CATEGORY:
        return {...state, searchQuery: payload}
        
        case 'SET_COMPANY':
        return {...state, searchQuery: payload}
        
        default :
        throw new Error("Filter reducer - action.type doesn't match.")
    }
}

export default filterReducer;