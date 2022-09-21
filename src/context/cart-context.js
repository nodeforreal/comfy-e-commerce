import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducer/cart-reducer";

const CartContext = createContext({});

const initialState = {
  cart_products: [],
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
