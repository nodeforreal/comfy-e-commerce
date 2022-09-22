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
  ProtectedRoute,
} from "./pages";
import { NavBar, SideBar, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <ProtectedRoute>
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
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </ProtectedRoute>
    </BrowserRouter>
  );
};

export default App;
