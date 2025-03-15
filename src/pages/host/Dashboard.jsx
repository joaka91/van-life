import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard page</h1>
      <Outlet />
    </>
  )
}