import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useProductsContext } from "../context/product-context";

const GridView = () => {
  const { products } = useProductsContext();

  return (
    <Wrapper>
      {products.map((product) => {
        const { id } = product;
        return <ProductCard key={id} {...product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.6rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.6rem;
  .product-image {
    height: 175px;
  }
  @media screen and (min-width: 992px) {
    .product-image {
      height: 175px;
    }
  }
`;
export default GridView;
