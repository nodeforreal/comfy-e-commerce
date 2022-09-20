const filteredProducts = (products) => {
  // unique
  const productObject = {};
  products.forEach((product) => {
    productObject[product.id] = product;
  });

  return Object.values(productObject);
};
export { filteredProducts };
