import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
const CartEmpty = (props) => {
  return (
    <Wrapper {...props}>
      <h2>your cart is empty.</h2>
      <Link to='/products' className="btn link">fill it</Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
   display: grid;

  h2 {
    color: var(--clr-grey-3);
    margin: 1rem auto;
    text-align: center;
  }

  .link {
    display: inline-block;
    margin: 1rem auto;
  }
`;
export default CartEmpty;
