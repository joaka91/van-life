import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import makeServer from "./server"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from './pages/Login'
import NotFound from "./pages/NotFound"
import Vans from "./pages/vans/Vans"
import Van from "./pages/vans/Van"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import HostVans from "./pages/host/HostVans"
import HostVan from "./pages/host/HostVan"
import HostVanDetails from "./pages/host/HostVanDetails"
import HostVanPricing from "./pages/host/HostVanPricing"
import HostVanPhotos from "./pages/host/HostVanPhotos"
import Reviews from "./pages/host/Reviews"
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import AuthRequired from './components/AuthRequired'

makeServer()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<Van />} />
          </Route>

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans">
                <Route index element={<HostVans />} />
                <Route path=":id" element={<HostVan />}>
                  <Route index element={<HostVanDetails />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
