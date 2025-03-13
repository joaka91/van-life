import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo">#VANLIFE</Link>
      <nav className="site-header__nav">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2024 #VANLIFE</p>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
