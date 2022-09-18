// basic setup
import { createContext, useReducer, useContext } from "react";
import filterReducer from "../reducer/filter-reducer";
import { useProductsContext } from "../context/product-context";

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
} from "../actions";

const FilterContext = createContext({});

const initialState = {
  products: [],
  searchQuery: "",
  category: "all",
  company: "all",
  color: "all",
  price: 1500,
  freeShipping: false,
  sortBy: SORT_LOWEST,
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  console.log(products);
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
    products,
  });

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
