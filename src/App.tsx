import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Home'
import Product from './Product'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </HashRouter>
  )
}
