import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducer/cart-reducer";
import { ADD_TO_CART } from "../actions";

const CartContext = createContext({});

const initialState = {
  cart_items: [],
  order_total: 0,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  const addToCart = (cartItem) => {
    dispatch({ type: ADD_TO_CART, payload: cartItem });
  };
  
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
