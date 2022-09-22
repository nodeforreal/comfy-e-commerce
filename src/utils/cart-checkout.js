import { formatPrice } from "./currency";

const cartCheckout = (cartItems, shippingFee) => {
  let sub_total, order_total, shipping_fee;
  sub_total = cartItems.reduce((total, { subTotal }) => total + subTotal, 0);

  order_total = formatPrice(sub_total + shippingFee);
  shipping_fee = formatPrice(shippingFee);
  sub_total = formatPrice(sub_total);

  return {
    sub_total,
    order_total,
    cart_items: cartItems,
    shipping_fee,
  };
};

export { cartCheckout };
