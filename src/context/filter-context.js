// basic setup
import { createContext, useReducer, useContext, useEffect } from "react";
import filterReducer from "../reducer/filter-reducer";
import { useProductsContext } from "./product-context";
import { SET_PRODUCTS, UPDATE_FILTER, SORT_PRODUCTS } from "../actions";

const FilterContext = createContext({});

const initialState = {
  filter: {},
  products: [],
  filtered_products: [],
  searchQuery: "",
  category: "all",
  company: "all",
  color: "all",
  priceRange: 0,
  freeShipping: false,
  sortBy: SORT_LOWEST,
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);
  //  search and update filter
  //   sort filter
  // clear filter

  useEffect(() => {
    //   set products
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [products]);

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
