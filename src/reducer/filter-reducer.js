import {
  UPDATE_FILTER,
  SET_PRODUCTS,
  SORT_PRODUCTS,
  CLEAR_FILTER,
} from "../actions";
import {
  SORT_HIGHEST,
  SORT_LOWEST,
  SORT_NAME_ASC,
  SORT_NAME_DESC,
} from "../utils/constants";

// FILTER REDUCER
const filterReducer = (state, { type, payload }) => {
  if (type === SET_PRODUCTS) {
    const products = payload;

    if (!products) {
      return { ...state };
    }

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
    const priceRange = filter.maxPrice;
    return {
      ...state,
      products,
      filtered_products: products,
      filter,
      isReady: true,
      priceRange,
    };
  }

  if (type === UPDATE_FILTER) {
    const filtered_products = state.products
      .filter(({ name }) => {
        const searchQuery = payload.searchQuery || state.searchQuery;
        if (searchQuery === "") return true;
        return name.toLowerCase().startsWith(searchQuery.toLowerCase());
      })
      .filter(({ category }) => {
        const _category = payload.category || state.category;
        if (_category === "all") return true;
        return _category === category;
      })
      .filter(({ company }) => {
        const _company = payload.company || state.company;
        if (_company === "all") return true;
        return _company === company;
      })
      .filter(({ colors }) => {
        const color = payload.color || state.color;
        if (color === "all") return true;
        return colors.includes(color);
      })
      .filter(({ price }) => {
        const _priceRange = payload.priceRange || state.priceRange;
        if (_priceRange === "all") return true;
        return price <= _priceRange;
      })
      .filter(({ shipping }) => {
        const freeShipping = payload.freeShipping;
        if (!freeShipping) return true;
        return shipping;
      });

    return {
      ...state,
      filtered_products,
      ...payload,
    };
  }
  if (type === CLEAR_FILTER) {
    const filtered_products = [...state.products];
    const priceRange = state.filter.maxPrice;
    return { ...state, filtered_products, priceRange, ...payload };
  }

  if (type === SORT_PRODUCTS) {
    let filtered_products = [...state.filtered_products];
    if (payload === SORT_LOWEST) {
      filtered_products = filtered_products.sort((a, b) => a.price - b.price);
    }
    if (payload === SORT_HIGHEST) {
      filtered_products = filtered_products.sort((a, b) => b.price - a.price);
    }

    if (payload === SORT_NAME_ASC) {
      filtered_products = filtered_products.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        // name equal
        return 0;
      });
    }

    if (payload === SORT_NAME_DESC) {
      filtered_products = filtered_products.reverse((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        // name equal
        return 0;
      });
    }
    return { ...state, filtered_products };
  }
  throw new Error("Action type mis-match :" + type);
};

export default filterReducer;
