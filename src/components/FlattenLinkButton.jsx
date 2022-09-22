import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  padding: 0.25rem 0.5rem;
  background-color: var(--clr-red-dark);
  border-radius: var(--radius);
  font-size: 0.9rem;
  color: var(--clr-white);
  text-transform: capitalize;
  text-align: center;
  letter-spacing: var(--spacing);
`;

export default Wrapper;
