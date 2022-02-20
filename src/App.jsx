import "./App.css";
import React from "react"
import Header from "./components/productComponents/header";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/productComponents/productListing";
import ProductDetail from "./components/productComponents/productDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<ProductListing />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route>404 Not found </Route>
      </Routes>
      
    </div>
  );
}

export default App;
