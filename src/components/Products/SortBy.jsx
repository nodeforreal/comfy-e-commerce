import React from "react";
import styled from "styled-components";
const methods = [
  {
    id: 1,
    label: "price (lowest)",
    value: "lowest",
  },
  {
    id: 2,
    label: "price (highest)",
    value: "highest",
  },
  {
    id: 3,
    label: "name (a - z)",
    value: "a-z",
  },
  {
    id: 4,
    label: "name (z - a)",
    value: "z-a",
  },
];

const Company = () => {
  return (
    <Wrapper>
      <p>sort by</p>
      <select>
        {methods.map(({ id, label, value }) => {
          return <option key={id}>{label}</option>;
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
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Company;
