// basic setup
import { createContext, useReducer, useContext, useEffect } from "react";
import filterReducer from "../reducer/filter-reducer";
import { useProductsContext } from "./product-context";
import {
  FILTER_BEGIN,
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
  SET_PRODUCTS,
} from "../actions";

const FilterContext = createContext({});

const initialState = {
  filter_begin: false,
  products: [1, 2, 3],
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
  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
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
