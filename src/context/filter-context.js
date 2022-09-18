// basic setup
import {createContext, useReducer ,useContext } from 'react';


const FilterContext = createContext({})
const initialState = {
    searchQuery : ''
}

const FilterContextProvider = ({children})=>{
    
    return <FilterContext.Provider>{children}</FilterContext.Provider>
}

const useFilterContext = ()=>{
    return useContext(FilterContext);
}

export {FilterContextProvider, }
