import { useUserContext } from "../context/user-context";
import styled from "styled-components";

const AuthRoute = ({ children }) => {
  const { isLoading, isError } = useUserContext();

  if (isLoading) {
    return (
      <Wrapper className="section-center page">
        <h1>Loading....</h1>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper className="section-center page">
        <h1>Error....</h1>
      </Wrapper>
    );
  }

  return <>{children}</>;
};
const Wrapper = styled.section`
  display: grid;
  place-content: center;
  h1 {
    color: var(--clr-grey-3);
  }
`;
export default AuthRoute;
