import React from "react";
import styled from "styled-components";
import { PageHero, FilterBar, ProductsSection } from "../components";

const Products = () => {
  return (
    <>
      <PageHero title="products" />
      <section className="section-center page">
        <Wrapper>
          <FilterBar />
          <ProductsSection />
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  padding: 2.375rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export default Products;
