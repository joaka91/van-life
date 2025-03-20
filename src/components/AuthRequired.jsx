import { Navigate, Outlet, useLocation } from "react-router"

export default function AuthRequired() {
  const auth = localStorage.getItem("loggedin")
  const location = useLocation()
  if (!auth) {
    return <Navigate replace to="/login" state={{ message: "You have to login first", from: location.pathname }} />
  }
  return <Outlet />
}