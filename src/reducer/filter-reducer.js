import { UPDATE_FILTER } from "../actions";

const filterReducer = (state, { type, payload }) => {
  if (type === UPDATE_FILTER) {
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
    return { ...state, filtered_products };
  }
  throw new Error("...action type - mis-match...");
};

export default filterReducer;
