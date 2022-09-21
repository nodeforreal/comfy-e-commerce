import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducer/cart-reducer";
import {
  ADD_TO_CART,
  ADD_ITEM_QUANTITY,
  REMOVE_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  CLEAR_CART,
} from "../actions";

const CartContext = createContext({});

const initialState = {
  cart_items: [],
  order_total: 0,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (cartItem) => {
    let { id, selectedColor } = cartItem;
    // Unique item id.
    let itemId = id + selectedColor;
    dispatch({
      type: ADD_TO_CART,
      payload: { ...cartItem, itemId },
    });
  };

  const addItemQuantity = (itemId) => {
    dispatch({ type: ADD_ITEM_QUANTITY, payload: itemId });
  };
  
  const removeItemQuantity = (itemId) => {
    dispatch({ type: REMOVE_ITEM_QUANTITY, payload: itemId });
  };
  
  const removeCartItem = (itemId) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: itemId });
  };
  
  const clearCart = () => {
    dispatch({ type: CLEAR_CART, payload: initialState });
  };
  
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        addItemQuantity,
        removeItemQuantity,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
