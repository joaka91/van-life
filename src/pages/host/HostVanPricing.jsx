import { useOutletContext } from "react-router"

export default function HostVanPricing() {
  const van = useOutletContext()
  return <p className="host-van-pricing"><span>${van.price}</span>/day</p>
}