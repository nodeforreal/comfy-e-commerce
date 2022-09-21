import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducer/cart-reducer";

import {
  ADD_TO_CART,
  ADD_ITEM_QUANTITY,
  REMOVE_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  CHECKOUT_TOTAL,
} from "../actions";

const CartContext = createContext({});

const initialState = {
  cart_items: [],
  order_total: 0,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (cartItem) => {
    const { id, selectedColor } = cartItem;
    // unique item id.
    const itemId = id + selectedColor;

    dispatch({ type: ADD_TO_CART, payload: { ...cartItem, itemId } });
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
    console.log("clear - cart.");
    dispatch({ type: CLEAR_CART, payload: initialState });
  };

  const subTotal = () => {
    dispatch({ type: CHECKOUT_TOTAL });
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
        subTotal,
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
