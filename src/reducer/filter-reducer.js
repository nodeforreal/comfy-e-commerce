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
  SET_PRODUCTS,
} from "../actions";

const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      console.log(type, payload);
      return { ...state, products: payload };
    case GET_SEARCH:
      return { ...state, searchQuery: payload };

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
