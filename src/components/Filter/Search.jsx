import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Search = () => {
  const { getSearch, searchQuery, updateFilter } = useFilterContext();

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Seacrch"
        className="filter-input"
        value={searchQuery}
        onClick={(e) => updateFilter({ searchQuery: e.currentTarget.value })}
      />
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
