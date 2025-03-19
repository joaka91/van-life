import { Link } from "react-router"
import useFetch from "../../useFetch"

export default function HostVans() {
  const { data } = useFetch("/api/host/vans")
  const vans = data ? data.vans : []

  const vanItems = vans.map(van => (
    <div className="host-van-item" key={van.id}>
      <Link to={`${van.id}`}>
          <div className="host-van-item__inner">
            <div className="host-van-item__image"><img src={van.imageUrl} alt="Van" /></div>
            <div className="host-van-item__content">
              <p className="host-van-item__name">{van.name}</p>
              <p className="host-van-item__price">${van.price}/day</p>
            </div>
          </div>
      </Link>
    </div>
  ))

  return (
    <>
      <h1>Your listed vans</h1>
      {vans && <div className="host-van-list">
        {vanItems}
      </div>}
    </>
  )
}