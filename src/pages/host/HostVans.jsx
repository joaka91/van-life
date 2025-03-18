import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function HostVans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => {
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`)
        }
        return res.json()
      })
      .then(json => setVans(json.vans))
      .catch(e => console.error(e))
  }, [])

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