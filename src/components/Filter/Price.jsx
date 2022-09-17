import React, { useState } from "react";
import styled from "styled-components";

const Price = () => {
  const [price, setPrice] = useState(1245);
  return (
    <Wrapper>
      <h5>price</h5>
      <p>${price}</p>
      <input
        value={price}
        type="range"
        min="0"
        max="3000"
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
