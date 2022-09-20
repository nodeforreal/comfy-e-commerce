import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Company = () => {
  const {
    filter: { companies },
    updateFilter,
    company: selectedCompany,
  } = useFilterContext();

  return (
    <Wrapper>
      <h5>company</h5>
      <select
        value={selectedCompany}
        onClick={(e) => updateFilter({ company: e.currentTarget.value })}
      >
        {companies.map((company, index) => {
          return (
            <option key={index} value={company}>
              {company}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  select {
    background-color: var(--clr-grey-10);
    padding: 0.35rem;
    font-size: 0.8rem;
    border-radius: var(--radius);
    border: 0;
  }
`;
export default Company;
