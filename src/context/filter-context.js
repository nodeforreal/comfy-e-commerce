// basic setup
import { createContext, useReducer, useContext, useEffect } from "react";
import filterReducer from "../reducer/filter-reducer";
import { useProductsContext } from "./product-context";
import {
  SET_FILTER_BEGIN,
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
  SET_FILTER_LIST,
} from "../actions";

const FilterContext = createContext({});

const initialState = {
  filter_begin: true,
  filter: {},
  products: [1, 2, 3],
  filtered_products: [],
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

  const setFilterlists = (products) => {
    // catogories in products
    let categories = { all: "all" };
    products.forEach(({ category }) => {
      categories[category] = category;
    });
    categories = Object.values(categories);

    // companies in products
    let companies = { all: "all" };
    products.forEach(({ company }) => {
      companies[company] = company;
    });
    companies = Object.values(companies);

    // colors in products
    let colors = {};
    products.forEach(({ colors: colorsArr }) => {
      colorsArr.forEach((color) => {
        colors[color] = color;
      });
    });
    colors = Object.values(colors);

    // min,max price of products
    const minPrice = products.reduce((final, { price }) => {
      return Math.min(final, price);
    }, Infinity);
    const maxPrice = products.reduce((final, { price }) => {
      return Math.max(final, price);
    }, -Infinity);

    const filter = {
      categories,
      companies,
      colors,
      minPrice,
      maxPrice,
    };

    dispatch({ type: SET_FILTER_LIST, payload: filter });
  };

  const getSearch = (query) => {
    dispatch({ type: GET_SEARCH, payload: query });
  };

  const setCategory = (category) => {
    dispatch({ type: SET_CATEGORY, payload: category });
  };

  const setCompany = (company) => {
    dispatch({ type: SET_COMPANY, payload: company });
  };

  const setPriceRange = (price) => {
    dispatch({ type: SET_PRICE, payload: price });
  };

  useEffect(() => {
    setFilterlists(products);
    dispatch({ type: SET_PRODUCTS, payload: products });
    dispatch({ type: SET_FILTER_BEGIN });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, getSearch, setCategory, setCompany, setPriceRange }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
