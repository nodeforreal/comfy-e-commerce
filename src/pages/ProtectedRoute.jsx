import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }) => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
