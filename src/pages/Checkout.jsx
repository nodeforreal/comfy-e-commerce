import React from "react";
import styled from "styled-components";
import { CartEmpty, PageHero } from "../components";
import { useCartContext } from "../context/cart-context";
import { useUserContext } from "../context/user-context";

const Checkout = () => {
  const { user } = useUserContext();
  const { cart_items } = useCartContext();
  if (cart_items.length === 0) {
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
      
      <div>
          <h4>Hello, {user.name}</h4>
          <p>Your total is {}</p>

</div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Checkout;
