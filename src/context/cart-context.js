import {createContext, useReducer, useContext} from 'react';


const CartContext = createContext({})

const initialState = {
	cart_products:[]
}

const CartContextProvider = ({children})=>{
	const [state,dispatch] = useReducer()
	return <CartContext.Provider value={{...state}}>{children}</CartContext>
}

const useCartContext = ()=>{
	return useContext(CartContext)
}

export {CartContextProvider, useCartContext}
