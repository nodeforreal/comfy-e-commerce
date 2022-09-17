import styled from "styled-components";

import React from "react";

const Underline = ({ children, ...props }) => {
  return (
    <Wrapper>
      {children}
      <Line {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Line = styled.div`
  height: 0.25rem;
  background-color:  ${({ backgroundColor }) => backgroundColor || 'var(--clr-primary-6)'};
  width: ${({ width }) => width};
`;

export default Underline;
