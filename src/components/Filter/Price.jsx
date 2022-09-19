import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Price = () => {
  const {
    filter: { minPrice, maxPrice },
    setPriceRange,
    priceRange,
  } = useFilterContext();

  return (
    <Wrapper>
      <h5>price</h5>
      <p>${priceRange}</p>
      <input
        value={maxPrice / 2}
        type="range"
        min={minPrice}
        step="10000"
        max={maxPrice}
        onChange={(e) => setPriceRange(e.currentTarget.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    margin-bottom: 0.4rem;
  }
`;
export default Price;
