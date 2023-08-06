import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Lib/Footer/Footer";
import Navbar from "./Components/Lib/Navbar/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/package";

function App() {
  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
