import React from "react";
import { CartEmpty, CartSection, PageHero } from "../components";
import styled from "styled-components/macro";

const Cart = () => {
  if (false) {
    // return (
    //   <Wrapper className="page-100">
    //     <CartEmpty
    //       css={`
    //         padding-top: 2rem;
    //       `}
    //     />
    //   </Wrapper>
    // );
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
