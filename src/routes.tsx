import { Routes, Route } from 'react-router-dom'

import Home from './pages/01_Home'
import Categories from './pages/02_Categories'
import Product from './pages/03_Product'
import Checkout from './pages/04_Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
