import React from "react";
import { CartEmpty, CartSection, PageHero } from "../components";
import styled from "styled-components/macro";
import { useCartContext } from "../context/cart-context";

const Cart = () => {
  const { cart_items } = useCartContext();
  if (cart_items.length === 0) {
    return (
      <Wrapper className="page-100">
        <CartEmpty
          css={`
            padding-top: 2rem;
          `}
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper className="page-100">
      <PageHero title="cart" />
      <CartSection />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Cart;
