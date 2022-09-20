// basic setup
import { createContext, useReducer, useContext, useEffect } from "react";
import filterReducer from "../reducer/filter-reducer";
import { useProductsContext } from "./product-context";
import {
  SET_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
  SORT_PRODUCTS,
  SORT_LOWEST,
  SORT_HIGHEST,
  SORT_NAME_ASC,
  SORT_NAME_DESC,
} from "../actions";

const FilterContext = createContext({});

const initialState = {
  isReady: false,
  filter: {},
  products: [],
  filtered_products: [],
  searchQuery: "",
  category: "all",
  company: "all",
  color: "all",
  priceRange: "0",
  freeShipping: false,
  sortBy: SORT_LOWEST,
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);
  //  search and update filter
  const updateFilter = (filter) => {
    dispatch({ type: UPDATE_FILTER, payload: filter });
  };

  // clear filter
  const clearFilter = () => {
    const reset = {
      searchQuery: "",
      category: "all",
      company: "all",
      color: "all",
      freeShipping: false,
    };

    dispatch({ type: CLEAR_FILTER, payload: reset });
  };
  //   sort filter

  useEffect(() => {
    //   set products
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, updateFilter, clearFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
