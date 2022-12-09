import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import CartPage from "../pages/Cart/CartPage";
import FinishedPage from "../pages/FinishedPage/FinishedPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<FinishedPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
