import { Routes, Route } from 'react-router-dom'

import Home from './pages/01_Home'
import Categories from './pages/02_Categories'
import Product from './pages/03_Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
