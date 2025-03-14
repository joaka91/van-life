import { useEffect, useState } from "react"
import { Link } from "react-router"
import Badge from "../components/Badge"

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => {
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`)
        }
        return res.json()
      })
      .then(json =>setVans(json.vans))
      .catch(e => console.error(e))
  }, [])

  const vanItems = vans.map(van => (
    <div key={van.id} className="van-item">
      <Link to={`/vans/${van.id}`}>
        <img className="van-item__image" src={van.imageUrl} alt="A van" />
        <div className="van-item__container">
          <p className="van-item__name">{van.name}</p>
          <p className="van-item__price">${van.price}<span>/day</span></p>
        </div>
        <Badge variant={van.type}>{van.type}</Badge>
      </Link>
    </div>
  ))

  return (
    <div className="padded flow">
      <h1>Explore our van options</h1>
      {vans && <div className="van-list">
        {vanItems}
      </div>}
    </div>
  )
}