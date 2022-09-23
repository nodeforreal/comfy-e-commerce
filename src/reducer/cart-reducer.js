import {
  ADD_TO_CART,
  ADD_ITEM_QUANTITY,
  REMOVE_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  CLEAR_CART,
} from "../actions";
import { cartCheckout } from "../utils/cart-checkout";

// CART REDUCER
const cartReducer = (state, { type, payload }) => {
  let finalCheckout;
  if (type === ADD_TO_CART) {
    //   initial set up.
    if (state.cart_items.length === 0) {
      finalCheckout = cartCheckout([payload], state.shipping_fee);
      return { ...state, ...finalCheckout };
    }

    //check itemID is exist.
    const currentItem = state.cart_items.filter(({ itemId }) => {
      return itemId === payload.itemId;
    });

    if (currentItem.length === 0) {
      finalCheckout = cartCheckout(
        [...state.cart_items, payload],
        state.shipping_fee
      );
      return { ...state, ...finalCheckout };
    }

    // if exist with same itemId.
    const cart_items = state.cart_items.map((cartItem) => {
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

    finalCheckout = cartCheckout(cart_items, state.shipping_fee);
    return { ...state, ...finalCheckout };
  }

  if (type === ADD_ITEM_QUANTITY) {
    const cart_items = state.cart_items.map((cartItem) => {
      let { itemId, price } = cartItem;

      if (itemId === payload) {
        // if (cartItem.selectedQuantity === 1) return cartItem;
        let selectedQuantity = cartItem.selectedQuantity + 1;
        let subTotal = selectedQuantity * price;
        return { ...cartItem, selectedQuantity, subTotal };
      }

      return cartItem;
    });
    finalCheckout = cartCheckout(cart_items, state.shipping_fee);
    return { ...state, ...finalCheckout };
  }

  if (type === REMOVE_ITEM_QUANTITY) {
    const cart_items = state.cart_items.map((cartItem) => {
      let { itemId, price } = cartItem;

      if (itemId === payload) {
        if (cartItem.selectedQuantity === 1) return cartItem;
        let selectedQuantity = cartItem.selectedQuantity - 1;
        let subTotal = selectedQuantity * price;
        return { ...cartItem, selectedQuantity, subTotal };
      }

      return cartItem;
    });
    finalCheckout = cartCheckout(cart_items, state.shipping_fee);
    return { ...state, ...finalCheckout };
  }

  if (type === REMOVE_CART_ITEM) {
    const cart_items = state.cart_items.filter(({ itemId }) => {
      return payload !== itemId;
    });
    finalCheckout = cartCheckout(cart_items, state.shipping_fee);
    return { ...state, ...finalCheckout };
  }

  if (type === CLEAR_CART) {
    return { ...payload };
  }

  throw new Error("Action type - mis-match. " + type);
};

export { cartReducer };
