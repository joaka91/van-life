import { useOutletContext } from "react-router"

export default function HostVanPhotos() {
  const van = useOutletContext()
  return (
    <img src={van.imageUrl} alt="Van" className="host-van-photo" />
  )
}