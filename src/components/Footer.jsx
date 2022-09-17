import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="text-center">
      <h5>
        &#169; 2022 <span>ComfySloth</span> All rights reserved.
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  * {
    margin: 0;
  }

  height: 5rem;
  background-color: var(--clr-grey-2);
  display: grid;
  place-content: center;

  h5 {
    letter-spacing: var(--spacing);
    color: var(--clr-grey-9);
  }

  span {
    color: var(--clr-primary-5);
  }
`;

export default Footer;
