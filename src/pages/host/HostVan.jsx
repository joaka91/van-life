import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import Badge from "../../components/Badge"

export default function HostVan() {
  const [van, setVan] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
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
      <Link to=".." className="back-link">&larr; Back to all vans</Link>
      {van && <div className="host-van flow">
        <div className="host-van__top">
          <div className="host-van__image"><img src={van.imageUrl} alt="Van" /></div>
          <div className="host-van__top-content">
            <Badge variant={van.type}>{van.type}</Badge>
            <h1 className="host-van__name">{van.name}</h1>
            <p className="host-van__price">${van.price}<span>/day</span></p>
          </div>
        </div>
        <div className="host-van__nav">(Navbar goes here)</div>
        <p><strong>Name:</strong> {van.name}</p>
        <p><strong>Category:</strong> <span style={{textTransform: "capitalize"}}>{van.type}</span></p>
        <p><strong>Description:</strong> {van.description}</p>
        <p><strong>Visibility:</strong> Public</p>
      </div>}
    </>
  )
}