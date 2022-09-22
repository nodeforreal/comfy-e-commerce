const formatPrice = (cents) => {
  const dollars = (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });

  return dollars;
};

export { formatPrice };
