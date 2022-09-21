import { ADD_TO_CART } from "../actions";

// CART REDUCER
const cartReducer = (state, { type, payload }) => {
  if (type === ADD_TO_CART) {
    if (state.cart_items.length === 0) {
      return { ...state, cart_items: [payload] };
    }
    //for update quality, subtotal.
    let tempCart = [];
    const cartItems = state.cart_items.map((cartItem) => {
      if (cartItem.id !== payload.id) return cartItem;

      if (cartItem.color !== payload.color) {
        tempCart.push(payload);
        return { ...cartItem };
      }

      let selectedQuantity, subTotal;
      selectedQuantity = cartItem.selectedQuantity + payload.selectedQuantity;
      subTotal = cartItem.price * selectedQuantity;
      return { ...cartItem, selectedQuantity, subTotal };
    });

    return { ...state, cart_items: [...cartItems, ...tempCart] };
  }

  throw new Error("Action type - mis-match. " + type);
};

export { cartReducer };
