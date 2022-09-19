import {
  FILTER_BEGIN,
  SET_FILTER_LIST,
  SET_PRODUCTS,
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

const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_BEGIN:
      return { ...state, filter_begin: payload };
    case SET_FILTER_LIST:
      return { ...state, filter: payload, filter_begin: false };
    case SET_PRODUCTS:
      return { ...state, products: payload, filter_begin: false };

    case GET_SEARCH:
      const products = state.products.filter(({ name }) => {
        return name.startsWith(payload);
      });
      return { ...state, searchQuery: payload, filtered_products: products };

    case SET_CATEGORY:
      return { ...state, searchQuery: payload };

    case SET_COMPANY:
      return { ...state, searchQuery: payload };

    case SET_COLOR:
      return { ...state, searchQuery: payload };

    case SET_PRICE:
      return { ...state, searchQuery: payload };

    case SET_SHIPPING:
      return { ...state, searchQuery: payload };

    case SORT_HIGHEST:
      return { ...state, searchQuery: payload };

    case SORT_LOWEST:
      return { ...state, searchQuery: payload };

    case SORT_NAME_ASC:
      return { ...state, searchQuery: payload };

    case SORT_NAME_DESC:
      return { ...state, searchQuery: payload };

    case SET_FILTER_CLEAR:
      return { ...state, searchQuery: payload };

    default:
      throw new Error("Filter reducer - action.type doesn't match.");
  }
};

export default filterReducer;
