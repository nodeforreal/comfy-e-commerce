import React from "react";
import styled from "styled-components";
import { HiMinusSm } from "react-icons/hi";
import { GrFormAdd } from "react-icons/gr";

const ProductQuantity = () => {
  return (
    <Wrapper>
      <button className="quantity-btn">
        <HiMinusSm className="icon" />
      </button>
      <h2>{1}</h2>
      <button className="quantity-btn">
        <GrFormAdd className="icon" />
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
    width: 1.5rem;
    height: 1.5rem;
    color: var(--clr-grey-2);
  }
`;
export default ProductQuantity;
