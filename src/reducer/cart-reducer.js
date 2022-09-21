import { ADD_TO_CART } from "../actions";

// CART REDUCER
const cartReducer = (state, { type, payload }) => {
  if (type === ADD_TO_CART) {
    if (state.cart_items.length === 0) {
      return { ...state, cart_items: [payload] };
    }
    //check cart item whether exist.
    const currentItem = state.cart_items.filter(({ id }) => {
      return id === payload.id;
    });
    if (currentItem.length === 0) {
      return { ...state, cart_items: [...state.cart_items, payload] };
    }
    
    
    return { ...state };
  }

  throw new Error("Action type - mis-match. " + type);
};

export { cartReducer };
