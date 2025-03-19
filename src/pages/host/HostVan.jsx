import { Link, useParams, Outlet, NavLink } from "react-router"
import Badge from "../../components/Badge"
import useFetch from "../../useFetch"

export default function HostVan() {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`/api/host/vans/${id}`)
  const van = data?.van

  return (
    <>
      <Link to=".." className="back-link">&larr; Back to all vans</Link>

      {(loading || error) && <h1 style={{paddingBottom:"2rem"}}>{loading ? "Loading van..." : `There was an error: ${error.message}`}</h1>}

      {(van && !loading && !error) && <div className="host-van flow">
        <div className="host-van__top">
          <div className="host-van__image"><img src={van.imageUrl} alt="Van" /></div>
          <div className="host-van__top-content">
            <Badge variant={van.type}>{van.type}</Badge>
            <h1 className="host-van__name">{van.name}</h1>
            <p className="host-van__price">${van.price}<span>/day</span></p>
          </div>
        </div>
        <nav className="host-van__nav subnav">
          <NavLink to="." end>Details</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        <Outlet context={van} />
      </div>}
    </>
  )
}