import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listadocha/:id" element={<Product />} />
      </Routes>
    </Router>
  )
}
