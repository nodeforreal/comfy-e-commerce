import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";
import {
  SORT_HIGHEST,
  SORT_LOWEST,
  SORT_NAME_ASC,
  SORT_NAME_DESC,
} from "../../utils/constants";

const methods = [
  {
    id: 1,
    label: "price (lowest)",
    value: SORT_LOWEST,
  },
  {
    id: 2,
    label: "price (highest)",
    value: SORT_HIGHEST,
  },
  {
    id: 3,
    label: "name (a - z)",
    value: SORT_NAME_ASC,
  },
  {
    id: 4,
    label: "name (z - a)",
    value: SORT_NAME_DESC,
  },
];

const Company = () => {
  const { sortProducts } = useFilterContext();
  return (
    <Wrapper>
      <p>sort by</p>
      <select onChange={(e) => sortProducts(e.currentTarget.value)}>
        {methods.map(({ id, label, value }) => {
          return (
            <option key={id} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  p {
    text-transform: capitalize;
    margin: 0;
  }

  select {
    padding: 0.35rem;
    border-radius: var(--radius);
    border: 0;
    backgroun-color: var(--clr-primary-10);
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Company;
