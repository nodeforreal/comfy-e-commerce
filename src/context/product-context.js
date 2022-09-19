import { createContext, useContext, useReducer, useEffect } from "react";
import { productsReducer } from "../reducer/product-reducer";

import {
  PRODUCTS_FETCH_BEGIN,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  SINGLE_PRODUCT_FETCH_BEGIN,
  SINGLE_PRODUCT_FETCH_SUCCESS,
  SINGLE_PRODUCT_FETCH_ERROR,
} from "../actions";
import { products_api, single_product_api } from "../utils/constants";
import axios from "axios";

const ProductsContext = createContext({});

const initialState = {
  products_fetch_begin: false,
  products_fetch_success: [],
  products_fetch_error: false,
  featured_products: [],
  products: [],
  single_product_fetch_begin: true,
  single_product_fetch_success: {},
  single_product_fetch_error: false,
  single_product: {},
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: PRODUCTS_FETCH_BEGIN, payload: true });
    try {
      const { data } = await axios(products_api);
      dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCTS_FETCH_ERROR });
    }
  };

  const fetchSingleProduct = async (productId) => {
    console.log(productId);
    dispatch({ type: SINGLE_PRODUCT_FETCH_BEGIN });
    try {
      const { data } = await axios(`${single_product_api}${productId}`);
      dispatch({ type: SINGLE_PRODUCT_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_FETCH_ERROR });
    }
  };
  console.log("products  " + state.products.length);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContextProvider, useProductsContext };
