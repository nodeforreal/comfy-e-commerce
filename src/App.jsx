import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Products,
  Cart,
  Checkout,
  SingleProduct,
  Error,
  AuthRoute,
  PaymentSucceeded,
} from "./pages";
import { NavBar, SideBar, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <AuthRoute>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/products/:productId"
            element={<SingleProduct />}
          ></Route>
          <Route
            path="/checkout/payment-succeeded"
            element={<PaymentSucceeded />}
          ></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </AuthRoute>
    </BrowserRouter>
  );
};

export default App;
