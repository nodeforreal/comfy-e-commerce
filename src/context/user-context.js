import { createContext, useReducer, useContext } from "react";
import { userReducer } from "../reducer/user-reducer";

const UserContext = createContext({});

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
    
  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUserContext };
