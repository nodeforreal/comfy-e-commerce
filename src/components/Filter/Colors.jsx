import styled from "styled-components/macro";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../../context/filter-context";

const Colors = () => {
  const {
    filter: { colors },
    updateFilter,
    color: selectedColor,
  } = useFilterContext();

  return (
    <Wrapper>
      <h5>colors</h5>
      <ul>
        <li
          className={`${
            selectedColor === "all" ? "filter-text-underline" : ""
          }`}
        >
          <button
            value="all"
            className="filter-text-secondary"
            onClick={(e) => updateFilter({ color: e.currentTarget.value })}
          >
            All
          </button>
        </li>
        {colors.map((color, index) => {
          return (
            <li key={index}>
              <button
                value={color}
                className="color-btn"
                onClick={(e) => updateFilter({ color: e.currentTarget.value })}
                css={`
                  background-color: ${color};
                `}
              >
                {selectedColor === color && <FaCheck className="icon" />}
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    .color-btn {
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      display: grid;
      place-content: center;
    }

    .icon {
      width: 0.7rem;
      height: 0.7rem;
      color: var(--clr-white);
    }
  }
`;
export default Colors;
