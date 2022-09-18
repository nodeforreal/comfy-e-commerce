import {
  GET_SEARCH,
  SET_CATEGORY, 
  SET_COMPANY,
  SET_COLOR,
  SET_PRICE,
  SET_SHIPPING,
  SORT_HIGHEST,
  SORT_LOWEST,
  SORT_NAME_ASC,
  SORT_NAME_DESC,
  SET_FILTER_CLEAR
  } from '../action';

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