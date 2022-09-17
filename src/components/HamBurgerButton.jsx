import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const HamBurgerButton = ({ onClick }) => {
  return (
    <Wrapper className="sidebar-open-btn" onClick={onClick}>
      <GiHamburgerMenu className="icon" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  color: var(--clr-red-light);
  .icon {
    width: 2rem;
    height: 2rem;
  }
`;
export default HamBurgerButton;
