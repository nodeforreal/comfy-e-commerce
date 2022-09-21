import React, { useState } from "react";
import styled from "styled-components/macro";

import { FaCheck } from "react-icons/fa";

const ProductColors = ({ colors, selectItemColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <Wrapper>
      {colors.map((color, index) => {
        return (
          <ProductColor
            productColor={color}
            key={index}
            onClick={() => {
              setSelectedColor(color);
              selectItemColor(color);
            }}
          >
            {color === selectedColor && <FaCheck className="icon" />}
          </ProductColor>
        );
      })}
    </Wrapper>
  );
};

const ProductColor = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.productColor};

  .icon {
    width: 0.9rem;
    height: 0.9rem;
    color: var(--clr-white);
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
`;

export default ProductColors;
