import styled from "styled-components";
import { ViewBar } from "./Products";
import GridView from "./GridView";
import ListView from "./ListView";
import { useUIContext } from "../context/ui-context";

const ProductsSection = () => {
  const { isGridView, isListView } = useUIContext();
  return (
    <Wrapper className="page">
      <ViewBar />
      {isGridView && <GridView />}
      {isListView && <ListView />}
      <GridView />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  flex-grow: 1;
  flex-basis: 100%;
`;
export default ProductsSection;

