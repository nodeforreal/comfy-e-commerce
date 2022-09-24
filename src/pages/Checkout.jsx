import React from "react";
import styled from "styled-components";
import { CartEmpty, PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart-context";
import { useUserContext } from "../context/user-context";
import { formatPrice } from "../utils/currency";

const Checkout = () => {
  const { user } = useUserContext();
  const { cart_items, order_total } = useCartContext();

  if (cart_items.length !== 0) {
    return (
      <Wrapper className="page-100">
        <PageHero title="Checkout" />
        <CartEmpty />
      </Wrapper>
    );
  }

  return (
    <Wrapper className="page-100">
      <PageHero title="Checkout" />
      <div className="checkout-content-container">
        <div className="checkout-content">
          <h4>Hello, {user.nickname}</h4>
          <p>Your total is {formatPrice(order_total)}</p>
          <StripeCheckout />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .checkout-content-container {
    display: flex;
  }
  .checkout-content {
    margin: 2rem auto;
  }
`;
export default Checkout;
