import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Category = () => {
  const { filter: { categories } } = useFilterContext();
  const [selection, setSelection] = useState("all");

  return (
    <Wrapper>
      <h5 className="filter-title">category</h5>
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <button
                className={`${
                  selection === category && "selected"
                } filter-text-secondary`}
                onClick={() => setSelection(category)}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  li {
    margin-top: 0.25rem;
  }
  button {
    padding-bottom: 0.25rem;
    background: transparent;
  }

  .selected {
    box-shadow: 0 0.0625rem var(--clr-grey-6);
  }
`;
export default Category;
