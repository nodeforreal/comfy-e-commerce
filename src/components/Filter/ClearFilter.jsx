import React from "react";
import FlatButton from "../FlatButton";
import { useFilterContext } from "../../context/filter-context";

const ClearFilter = () => {
  const { clearFilter } = useFilterContext();
  return (
    <div>
      <FlatButton onClick={clearFilter}>clear filter</FlatButton>
    </div>
  );
};

export default ClearFilter;
