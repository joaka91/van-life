import { Navigate, Outlet } from "react-router"

export default function AuthRequired() {
  const auth = false
  if (!auth) {
    return <Navigate to="/login" state={{ message: "You have to login first" }} />
  }
  return <Outlet />
}