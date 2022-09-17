import React from "react";
import styled from "styled-components";
import { CartEmpty,PageHero } from "../components";

const Checkout = () => {
  return <Wrapper className="page-100">
    <PageHero title ="Checkout" />
    <CartEmpty />
  </Wrapper>;
};

const Wrapper = styled.section``
export default Checkout;
