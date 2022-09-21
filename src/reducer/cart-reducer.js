import {
  ADD_TO_CART,
  ADD_ITEM_QUANTITY,
  REMOVE_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  CLEAR_CART,
} from "../actions";

// CART REDUCER
const cartReducer = (state, { type, payload }) => {
  if (type === ADD_TO_CART) {
    //   initial set up.
    if (state.cart_items.length === 0) {
      return { ...state, cart_items: [payload] };
    }

    //check itemID exist.
    const currentItem = state.cart_items.filter(({ itemId }) => {
      return itemId === payload.itemId;
    });

    if (currentItem.length === 0) {
      return { ...state, cart_items: [...state.cart_items, payload] };
    }

    // if exist with same itemId.
    const updatedCart = state.cart_items.map((cartItem) => {
      let { itemId, selectedColor, price } = cartItem;

      if (
        itemId === payload.itemId &&
        selectedColor === payload.selectedColor
      ) {
        let selectedQuantity =
          cartItem.selectedQuantity + payload.selectedQuantity;
        let subTotal = selectedQuantity * price;
        return { ...cartItem, selectedQuantity, subTotal };
      }

      return cartItem;
    });

    return { ...state, cart_items: [...updatedCart] };
  }

  if (type === ADD_ITEM_QUANTITY) {
    const cart_items = state.cart_items.map((cartItem) => {
      let { itemId, price } = cartItem;

      if (itemId === payload.itemId) {
        // if (cartItem.selectedQuantity === 1) return cartItem;

        let selectedQuantity = cartItem.selectedQuantity + 1;
        let subTotal = selectedQuantity * price;
        return { ...cartItem, selectedQuantity, subTotal };
      }

      return cartItem;
    });
    return { ...state, cart_items };
  }

  if (type === REMOVE_ITEM_QUANTITY) {
    const cart_items = state.cart_items.map((cartItem) => {
      let { itemId, price } = cartItem;

      if (itemId === payload.itemId) {
        if (cartItem.selectedQuantity === 1) return cartItem;
        let selectedQuantity = cartItem.selectedQuantity - 1;
        let subTotal = selectedQuantity * price;
        return { ...cartItem, selectedQuantity, subTotal };
      }

      return cartItem;
    });
    return { ...state, cart_items };
  }

  if (type === REMOVE_CART_ITEM) {
  }
  throw new Error("Action type - mis-match. " + type);
};

export { cartReducer };
