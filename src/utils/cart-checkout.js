const cartCheckout = (cartItems, shippingFee) => {
  let sub_total, order_total;
  sub_total = cartItems.reduce((total, { subTotal }) => total + subTotal, 0);
  order_total = sub_total + shippingFee;

  return {
    sub_total,
    order_total,
    cart_items: cartItems,
    shipping_fee: shippingFee,
  };
};

export { cartCheckout };
