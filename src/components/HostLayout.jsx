import { NavLink, Outlet } from "react-router";

export default function HostLayout() {
  return (
    <div className="padded flow">
      <nav>
        <NavLink to="." end>Dashboard</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}