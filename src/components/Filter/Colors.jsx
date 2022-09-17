import React, { useState } from "react";
import styled from "styled-components/macro";
import { FaCheck } from "react-icons/fa";

const colors = ["red", "green", "blue", "yellow"];

const Colors = () => {
  const [selection, setSelection] = useState("all");

  return (
    <Wrapper>
      <h5>colors</h5>
      <ul>
        <li className={`${selection === "all" ? "filter-text-underline" : ""}`}>
          <button
            className="filter-text-secondary"
            onClick={() => setSelection("all")}
          >
            All
          </button>
        </li>
        {colors.map((color, index) => {
          return (
            <li key={index}>
              <button
                className="color-btn"
                onClick={() => setSelection(color)}
                css={`
                  background-color: ${color};
                `}
              >
                {color === selection && <FaCheck className="icon" />}
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
