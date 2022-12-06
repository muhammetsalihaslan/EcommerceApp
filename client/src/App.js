import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import Cart from "./pages/Cart";

import Login from "./pages/Login";

import Register from "./pages/Register";
import Success from "./pages/Success";

// import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
