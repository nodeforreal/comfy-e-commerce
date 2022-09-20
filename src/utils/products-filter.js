const productFilter = (state) => {
  return state.products
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
};

export { productFilter };
