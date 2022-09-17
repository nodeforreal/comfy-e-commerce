import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { UIContextProvider } from "./context/ui-context";
import { ProductsContextProvider } from "./context/product-context";
const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UIContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </UIContextProvider>
  </React.StrictMode>
);
