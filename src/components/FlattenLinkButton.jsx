import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  background-color: var(--clr-red-dark);
  border-radius: var(--radius);
  font-size: 0.9rem;
  color: var(--clr-white);
  letter-spacing: var(--spacing);
`;

export default Wrapper;
