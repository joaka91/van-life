import { NavLink, Outlet } from "react-router";

export default function HostLayout() {
  return (
    <div className="padded flow">
      <nav>
        <NavLink to="/host" end>Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/vans">Vans</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}