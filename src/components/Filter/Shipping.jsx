import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Shipping = () => {
  const { setFreeShipping, isFreeShipping } = useFilterContext();
  return (
    <Wrapper>
      <p>
        <label htmlFor="shipping-filter">free shipping</label>
      </p>
      <input
        id="shipping-filter"
        type="checkbox"
        checked={isFreeShipping}
        onChange={() => setFreeShipping()}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  p {
    margin: 0;
    text-transform: capitalize;
    section: none;
  }
  
  input {
    height: 1rem;
    width: 1rem;f
  }
`;
export default Shipping;
