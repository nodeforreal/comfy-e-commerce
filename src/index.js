import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { UIContextProvider } from "./context/ui-context";
import { ProductsContextProvider } from "./context/product-context";
import { FilterContextProvider } from "./context/filter-context";
import { CartContextProvider } from "./context/cart-context";
import { UserContextProvider } from "./context/user-context";

import { Auth0Provider } from "@auth0/auth0-react";
const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-g0u3g6ew.us.auth0.com"
      clientId="FAU25KgoWeoyfagLp3WMn7lQPDH9ZDvc"
      redirectUri={window.location.origin}
      //   cacheLocation="memory"
    >
      <UserContextProvider>
        <UIContextProvider>
          <ProductsContextProvider>
            <FilterContextProvider>
              <CartContextProvider>
                <App />
              </CartContextProvider>
            </FilterContextProvider>
          </ProductsContextProvider>
        </UIContextProvider>
      </UserContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
