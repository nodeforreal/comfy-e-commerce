import React from "react";
import styled from "styled-components";
import { PageHero, FilterBar, ProductsSection, Spinner } from "../components";
import { useFilterContext } from "../context/filter-context";

const Products = () => {
  const { filter_begin: isReady } = useFilterContext();
  if (isReady) {
    return (
      <>
        <PageHero title="products" />
        <section className="section-center page"></section>
      </>
    );
  }
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
  gap: 1rem;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export default Products;
