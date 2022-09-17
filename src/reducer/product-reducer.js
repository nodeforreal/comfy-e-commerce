import {
  PRODUCTS_FETCH_BEGIN,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  SINGLE_PRODUCT_FETCH_BEGIN,
  SINGLE_PRODUCT_FETCH_SUCCESS,
  SINGLE_PRODUCT_FETCH_ERROR,
} from "../actions";

const productsReducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case PRODUCTS_FETCH_BEGIN:
      return { ...state, product_fetch_begin: true };

    case PRODUCTS_FETCH_SUCCESS:
      const featured_products = payload.filter(({ featured }) => featured);
      const products = payload;

      return {
        ...state,
        product_fetch_success: payload,
        products_fetch_begin: false,
        featured_products,
        products,
      };
    case PRODUCTS_FETCH_ERROR:
      return { ...state, products_fetch_error: true };

    case SINGLE_PRODUCT_FETCH_BEGIN:
      return { ...state, single_product_fetch_begin: true };

    case SINGLE_PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        single_product_fetch_begin: false,
        single_product_fetch_success: payload,
        single_product: payload,
      };

    case SINGLE_PRODUCT_FETCH_ERROR:
      return {
        ...state,
        single_product_fetch_begin: false,
        single_product_fetch_error: true,
      };

    default:
      throw new Error("Action type mis-matching.");
  }
};

export { productsReducer };
