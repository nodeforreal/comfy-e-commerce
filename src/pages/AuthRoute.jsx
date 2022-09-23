import {useUserContext} from "../context/user-context";

const AuthRoute = ({ children }) => {
    const {isLoading, isError} = useUserContext()
    
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  
  return <>{children}</>;
};

export default AuthRoute;
