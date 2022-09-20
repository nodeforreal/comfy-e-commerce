import {
  SET_FILTER_BEGIN,
  SET_FILTER_LIST,
  SET_PRODUCTS,
  GET_SEARCH,
  SET_CATEGORY,
  SET_COMPANY,
  SET_COLOR,
  SET_PRICE_RANGE,
  SET_FREE_SHIPPING,
  SORT_HIGHEST,
  SORT_LOWEST,
  SORT_NAME_ASC,
  SORT_NAME_DESC,
  SET_FILTER_CLEAR,
} from "../actions";

const filterReducer = (state, { type, payload }) => {
  // product counts
  switch (type) {
    case SET_FILTER_BEGIN:
      return { ...state, filter_begin: payload };

    case SET_FILTER_LIST:
      const priceRange = payload.maxPrice / 2;
      return { ...state, priceRange, filter: payload };

    case SET_PRODUCTS:
      return { ...state, products: payload };

    case GET_SEARCH:
      return { ...state, searchQuery: payload };

    case SET_CATEGORY:
      return { ...state, category: payload };

    case SET_COMPANY:
      return { ...state, company: payload };

    case SET_COLOR:
      return { ...state, color: payload };

    case SET_PRICE_RANGE:
      return { ...state, priceRange: payload };

    case SET_FREE_SHIPPING:
      return { ...state, freeShipping: payload };

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
