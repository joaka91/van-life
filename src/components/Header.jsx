import { Link, NavLink } from "react-router"

export default function Header() {
  return (
    <header className="site-header padded">
      <Link to="/" className="site-header__logo">#VANLIFE</Link>
      <nav className="site-header__nav">
        <NavLink to="host">Host</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="login"><span className="login-icon"></span></NavLink>
        <button onClick={() => localStorage.removeItem("loggedin")}>❌</button>
      </nav>
    </header>
  )
}