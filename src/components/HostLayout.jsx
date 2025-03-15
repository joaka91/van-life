import { Link, Outlet } from "react-router";

export default function HostLayout() {
  return (
    <div className="padded">
      <nav className="page-nav" aria-label="Sub-navigation">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  )
}