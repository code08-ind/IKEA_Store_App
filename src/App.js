import React, { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Categories from './Pages/Categories';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './Pages/Product';
import Error from './Pages/Error';
import Address from './Pages/Address';
import ProductsByCategory from './Pages/ProductsByCategory';
import Cart from './Pages/Cart';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/admin' element={isLoggedIn ? <Admin setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/login" />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:prodid' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productsByCategory/:category' element={<ProductsByCategory />} />
        <Route path='/address' element={<Address />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;