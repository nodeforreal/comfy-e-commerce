import { UPDATE_FILTER, SET_PRODUCTS, SORT_PRODUCTS } from "../actions";

const filterReducer = (state, { type, payload }) => {
  if (type === SET_PRODUCTS) {
    const { products } = payload;
    console.log("set-products");
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
    console.log(categories);
    return { ...state, products, filter };
  }

  if (type === UPDATE_FILTER) {
    const { searchQuery, category, company, color, priceRange, freeShipping } =
      payload;

    const filtered_products = state.products
      .filter(({ name }) => {
        if (state.searchQuery === "") return true;
        return name.startsWith(state.searchQuery);
      })
      .filter(({ category }) => {
        if (state.category === "all") return true;
        return category === state.category;
      })
      .filter(({ company }) => {
        if (state.company === "all") return true;
        return company === state.company;
      })
      .filter(({ colors }) => {
        if (state.color === "all") return true;
        return colors.includes(state.color);
      })
      .filter(({ price }) => {
        return price <= state.priceRange;
      })
      .filter(({ shipping }) => {
        if (!state.freeShipping) {
          return true;
        }
        return shipping;
      });

    return {
      ...state,
      filtered_products,
      searchQuery,
      category,
      company,
      color,
      priceRange,
      freeShipping,
    };
  }

  if (type === SORT_PRODUCTS) {
    return { ...state };
  }
  throw new Error("Action type - mis-matched." + type);
};

export default filterReducer;
