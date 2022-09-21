import { ADD_TO_CART } from "../actions";

// CART REDUCER
const cartReducer = (state, { type, payload }) => {
  if (type === ADD_TO_CART) {
    return { ...state, cart_Items: [...state.cart_items, payload] };
  }

  throw new Error("Action type - mis-match. " + type);
};

export { cartReducer };
