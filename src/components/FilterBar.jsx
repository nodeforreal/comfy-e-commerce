import styled from "styled-components";
import {
  Search,
  Category,
  Company,
  Colors,
  Price,
  Shipping,
  ClearFilter,
} from "./Filter";

const FilterBar = () => {
  return (
    <Wrapper className="page">
      <Search />
      <Category />
      <Company />
      <Colors />
      <Price />
      <Shipping />
      <ClearFilter />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  flex-grow: 1;

  .filter-title {
    margin-bottom: 0.2rem;
    text-transform: capitalize;
    color: var(--clr-grey-3);
  }

  .filter-text-underline {
    box-shadow: 0 0.0625rem var(--clr-grey-6);
  }

  .filter-text-secondary {
    font-size: 0.8rem;
    color: var(--clr-grey-6);
    letter-spacing: 0.12rem;
  }

  @media screen and (min-width: 992px) {
    position: sticky;
    top: 0;
    flex-grow: 0;

    align-self: flex-start;

    width: 260px;
  }
`;

export default FilterBar;
