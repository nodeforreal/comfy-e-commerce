import { createContext, useContext, useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext({});

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  isError: false,
};

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const { isAuthenticated, user, isLoading, isError } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setState({ isAuthenticated, user, isLoading, isError });
    } else {
      setState({ ...initialState });
    }
  }, [isAuthenticated, user, isLoading, isError]);
  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };
