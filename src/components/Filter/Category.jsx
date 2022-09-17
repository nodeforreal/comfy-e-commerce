import React from "react";
import styled from "styled-components";

const categories = [
  "All",
  "office",
  "living room",
  "kitchen",
  "bedroom",
  "dinnig",
  "kids",
];

const Category = () => {
  return (
    <Wrapper>
      <h5 className="filter-title">category</h5>
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <button className="selected filter-text-secondary">{category}</button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    padding-bottom: 0.25rem;
    background: transparent;
  }

  .selected {
    box-shadow: 0 0.0625rem var(--clr-grey-6);
  }
`;
export default Category;
