import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useProductsContext } from "../context/product-context";

const Featured = () => {
  const { featured_products: products } = useProductsContext();
  return (
    <Wrapper className="page section-center">
      <h2>featured products</h2>
      <div className="underline"></div>
      <div className="featured-products">
        {products.slice(0, 3).map((product) => {
          const { id } = product;
          return <ProductCard key={id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;

  h2 {
    text-align: center;
    text-transform: capitalize;
  }

  .underline {
    margin: 0 auto;
    width: 7rem;
    height: 0.25rem;
    background-color: var(--clr-primary-5);
  }

  .featured-products {
    padding: 2.5rem 0 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.6rem;

    .product-image {
      height: 175px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 5rem 3rem;
    .featured-products {
      gap: 2.5rem;
      .product-image {
        height: 245px;
      }
    }
  }
`;

export default Featured;
