import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Badge from "../../components/Badge"

export default function Van() {
  const [van, setVan] = useState(null)
  const { id } = useParams()
  
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
    <>
      {van && <div className="van padded">
        <img src={van.imageUrl} alt="" className="van__image" />
        <Badge variant={van.type}>{van.type}</Badge>
        <h2 className="van__name">{van.name}</h2>
        <p className="van__price">${van.price}<span>/day</span></p>
        <p className="van__description">{van.description}</p>
        <button className="cta">Rent this van</button>
      </div>}
    </>
  )
}