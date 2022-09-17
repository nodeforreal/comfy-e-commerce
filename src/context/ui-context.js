import React, { createContext, useReducer, useContext } from "react";
import { uiReducer } from "../reducer/ui-reducer";
import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
} from "../actions";

const UIContext = createContext({});
const initialState = {
  isSidebarOpen: false,
  isListView: false,
  isGridView: true,
};

const UIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const changeGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };

  const changeListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        changeListView,
        changeGridView,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => {
  return useContext(UIContext);
};

export { UIContextProvider, useUIContext };
