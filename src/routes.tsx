import { Routes, Route } from 'react-router-dom'

import Home from './pages/01_Home'
import Categories from './pages/02_Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
