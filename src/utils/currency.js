const formatPrice = (cents) => {
  const dollars = (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dollars;
};

export { formatPrice };
