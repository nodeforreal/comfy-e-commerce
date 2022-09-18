import styled from "styled-components";

const NoProducts = () => {
  return (
    <Wrapper className="page-100">
      <h5>Sorry, no products matched your search.</h5>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  h5 {
    text-align: center;
  }
`;

export default NoProducts;
