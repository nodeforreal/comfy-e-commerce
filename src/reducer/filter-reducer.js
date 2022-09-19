import {
  SET_FILTER_BEGIN,
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
    case SET_FILTER_BEGIN:
      return { ...state, filter_begin: payload };

    case SET_FILTER_LIST:
      const priceRange = payload.maxPrice / 2;
      return { ...state, priceRange, filter: payload };

    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        filtered_products: payload,
      };

    case GET_SEARCH:
      const searchFilter = state.products.filter(({ name }) => {
        return name.startsWith(payload);
      });
      return {
        ...state,
        searchQuery: payload,
        filtered_products: searchFilter,
      };

    case SET_CATEGORY:
      if (payload === "all") {
        return { ...state, filtered_products: state.products, category: "all" };
      }
      const categoryFilter = state.products.filter(({ category }) => {
        return category === payload;
      });
      return { ...state, filtered_products: categoryFilter, category: payload };

    case SET_COMPANY:
      if (payload === "all") {
        return { ...state, filtered_products: state.products, company: "all" };
      }
      const companyFilter = state.products.filter(({ company }) => {
        return payload === company;
      });
      return {
        ...state,
        filtered_products: companyFilter,
        company: payload,
      };

    case SET_COLOR:
      if (payload === "all") {
        return { ...state, filtered_products: state.products, colors: "all" };
      }
      const colorFilter = state.products.filter(({ colors }) => {
        return colors.includes(payload);
      });
      return { ...state, filterd_products: colorFilter, color: payload };

    case SET_PRICE:
      return { ...state, priceRange: payload };

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
