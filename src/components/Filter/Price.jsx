import styled from "styled-components";
import { useFilterContext } from "../../context/filter-context";

const Price = () => {
  const {
    filter: { minPrice, maxPrice },
    updateFilter,
    priceRange,
  } = useFilterContext();

  return (
    <Wrapper>
      <h5>price</h5>
      <p>${priceRange}</p>
      <input
        value={priceRange}
        type="range"
        min={minPrice}
        max={maxPrice}
        onChange={(e) => updateFilter({ priceRange: e.currentTarget.value })}
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
