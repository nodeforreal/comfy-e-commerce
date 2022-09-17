import React from "react";
import styled from "styled-components";
import { CgCloseR } from "react-icons/cg";

const CloseButton = ({ onClick }) => {
  return (
    <Wrapper className="sidebar-open-btn" onClick={onClick}>
      <CgCloseR className="icon" />
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
export default CloseButton;
