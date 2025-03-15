import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import Van from "./pages/vans/Van"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import Layout from './components/Layout'

import makeServer from "./server"
makeServer()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Van />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
