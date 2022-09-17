import React from "react";
import styled from "styled-components";

const ClearFilter = () => {
  return (
    <Wrapper>
      <button>clear filter</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    background-color: var(--clr-red-dark);
    border-radius: var(--radius);
    font-size: 0.9rem;
    color: var(--clr-white);
    letter-spacing: var(--spacing);
  }
`;
export default ClearFilter;
