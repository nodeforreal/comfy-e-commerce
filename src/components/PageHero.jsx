import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, singleProduct }) => {
  return (
    <Wrapper>
      <h4 className="section-center">
        <Link to="/" className="link">
          Home
        </Link>
        {singleProduct && (
          <Link to="/products" className="link">
            / Products
          </Link>
        )}
        <span>/ {title}</span>
      </h4>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 5rem;
  background-color: var(--clr-primary-10);
  color: var(--clr-black);

  display: flex;
  align-items: center;

  .link {
    color: var(--clr-primary-3);
    &:hover {
      color: var(--clr-grey-1);
    }
  }
`;
export default PageHero;
