import styled from "styled-components";
import { ProductItem } from "./Products";
import { useProductsContext } from "../context/product-context";

const ListView = () => {
  const { products } = useProductsContext();
  return (
    <Wrapper>
      {products.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export default ListView;
