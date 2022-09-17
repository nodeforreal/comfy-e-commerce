import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="page-100">
      <div className="section-center error-content">
        <h1 className="text-center">404</h1>
        <h4 className="text-center">
          Sorry, the page you tried cannot be found
        </h4>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-content: center;

  .error-content {
    display: grid;
    place-content: center;
    h1 {
      color: var(--clr-grey-2);
    }
    h4 {
      color: var(--clr-grey-2);
    }
  }
  .btn {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .error-content {
      h1 {
        font-size: 8rem;
      }
    }
  }
`;
export default Error;
