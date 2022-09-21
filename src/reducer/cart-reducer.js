import { ADD_TO_CART } from "../actions";

// CART REDUCER
const cartReducer = (state, { type, payload }) => {
  if (type === ADD_TO_CART) {
    //   initial set up.
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

    let tempCart = [];
    // if exist with same color, id.
    const updatedCart = state.cart_items.map((cartItem) => {
      if (
        cartItem.id === payload.id &&
        cartItem.selectedColor === payload.selectedColor
      ) {
        let selectedQuantity =
          cartItem.selectedQuantity + payload.selectedQuantity;
        let subTotal = selectedQuantity * cartItem.price;
        return { ...cartItem, selectedQuantity, subTotal };
      } else if (
        cartItem.id === payload.id &&
        cartItem.selectedColor !== payload.selectedColor
      ) {
        tempCart.push(payload);
        return cartItem;
      }

      return cartItem;
    });

    return { ...state, cart_items: [...updatedCart, ...tempCart] };
  }

  throw new Error("Action type - mis-match. " + type);
};

export { cartReducer };
