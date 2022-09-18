import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { UIContextProvider } from "./context/ui-context";
import { ProductsContextProvider } from "./context/product-context";
import { FilterContextProvider } from "./context/filter-context";

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UIContextProvider>
      <ProductsContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </ProductsContextProvider>
    </UIContextProvider>
  </React.StrictMode>
);
