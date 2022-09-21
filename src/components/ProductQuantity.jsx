import React from "react";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductQuantity = ({ count, countLeft, countRight }) => {
  return (
    <Wrapper>
      <button className="quantity-btn" onClick={countLeft}>
        <FaMinus className="icon" />
      </button>
      <h2 className="product-quantity">{count}</h2>
      <button className="quantity-btn" onClick={countRight}>
        <FaPlus className="icon" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1rem;

  .quantity-btn {
    width: 1.5rem;
    height: 1.5rem;
  }

  h2 {
    color: var(--clr-grey-2);
  }

  .icon {
    width: 1.1rem;
    height: 1.1rem;
    color: var(--clr-grey-2);
  }

  @media screen and (max-width: 760px) {
    gap: 0.5rem;
  }
`;

export default ProductQuantity;
