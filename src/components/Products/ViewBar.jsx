import styled from "styled-components";
import ViewButtons from "./ViewButtons";
import SortBy from "./SortBy";

const ViewBar = ({}) => {
  return (
    <Wrapper>
      <ViewButtons />
      <p className="products-count">{23} products found</p>
      <hr />
      <SortBy />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 530px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto;
    hr {
      grid-column: 1/3;
    }
  }

  .products-count {
    margin: 0;
    text-transform: capitalize;
  }

  hr {
    border-bottom-color: var(--clr-grey-8);
    flex-grow: 1;
  }
`;

export default ViewBar;
