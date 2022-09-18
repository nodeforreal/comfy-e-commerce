// basic setup
import { createContext, useReducer, useContext } from "react";
import filterReducer from "../reducer/filter-reducer";

import {
  GET_SEARCH,
  SET_CATEGORY,
  SET_COMPANY,
  SET_COLOR,
  SET_PRICE,
  SET_SHIPPING,
  SORT_HIGHEST,
  SORT_LOWEST,
  SORT_NAME_ASC,
  SORT_NAME_DESC,
  SET_FILTER_CLEAR,
} from "../action";

const FilterContext = createContext({});
const initialState = {
  searchQuery: "",
  category: "all",
  company: "all",
  color: "all",
  price: 1500,
  freeShipping: false,
  sortBy: SORT_LOWEST,
};

const FilterContextProvider = ({ children }) => {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};

const useFilterContext = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
