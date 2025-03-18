import { useEffect, useState } from "react"
import { useLocation, useParams, Link } from "react-router"
import Badge from "../../components/Badge"

export default function Van() {
  const [van, setVan] = useState(null)
  const { id } = useParams()
  const location = useLocation()
  const prevQuery = location.state?.query?.length > 1 ? location.state.query : ""
  
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`)
        }
        return res.json()
      })
      .then(json => setVan(json.van))
      .catch(e => console.error(e))
  }, [])

  return (
    <div className="padded flow">
      <Link to={`..${prevQuery}`} className="back-link">&larr; Back to {prevQuery ? "search results" : "all vans"}</Link>
      {van && <div className="van">
        <img src={van.imageUrl} alt="" className="van__image" />
        <Badge variant={van.type}>{van.type}</Badge>
        <h2 className="van__name">{van.name}</h2>
        <p className="van__price">${van.price}<span>/day</span></p>
        <p className="van__description">{van.description}</p>
        <button className="cta">Rent this van</button>
      </div>}
    </div>
  )
}