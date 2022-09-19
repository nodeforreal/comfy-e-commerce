import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Price = () => {
  const [price, setPrice] = useState(1245);
  const {
    filter: { minPrice, maxPrice },
  } = useFilterContext();

  return (
    <Wrapper>
      <h5>price</h5>
      <p>${price}</p>
      <input
        value={maxPrice}
        type="range"
        min={minPrice}
        max={maxPrice}
        onChange={(e) => setPrice(e.currentTarget.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    margin-bottom: 0.4rem;
  }
`;
export default Price;
