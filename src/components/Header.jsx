import { Link } from "react-router"

export default function Header() {
  return (
    <header className="site-header padded">
      <Link to="/" className="site-header__logo">#VANLIFE</Link>
      <nav className="site-header__nav">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}