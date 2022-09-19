import styled from "styled-components";
import { ProductItem } from "./Products";
import { useFilterContext } from "../context/filter-context";

const ListView = () => {
  const { filtered_products: products } = useFilterContext();
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
