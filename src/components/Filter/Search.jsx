import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Seacrch" className="filter-input" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  input {
    width: 220px;
    height: 2rem;
    padding-left: 0.5rem;
    border-radius: var(--radius);
    outline-offset: 0;
    border: 0;
    background-color: var(--clr-grey-10);
    font-size: 0.8rem;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
