import React from "react";
import styled from "styled-components";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

const ProductStars = ({stars}) => {
  return (
    <Wrapper className="rating" >
      {Array.from({ length: 5 }, (_, index) => {
        index = index + 1;
        return index <= stars ? (
          <TiStarFullOutline key={index} className="star" />
        ) : stars > index - 1 && stars < index ? (
          <TiStarHalfOutline key={index} className="star" />
        ) : (
          <TiStarOutline key={index} className="star" />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .star {
    color: hsl(45, 80%, 60%);
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export default ProductStars;
