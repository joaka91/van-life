import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router"
import Badge from "../../components/Badge"
import clsx from "clsx"

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
      .then(json => setVans(json.vans))
      .catch(e => console.error(e))
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.getAll("type")

  const vansToShow = typeFilter.length > 0 ? vans.filter(van => typeFilter.includes(van.type)) : vans

  const vanItems = vansToShow.map(van => (
    <div key={van.id} className="van-item">
      <Link to={`${van.id}`} state={{ query: `?${searchParams.toString()}` }}>
        <img className="van-item__image" src={van.imageUrl} alt="A van" />
        <div className="van-item__container">
          <p className="van-item__name">{van.name}</p>
          <p className="van-item__price">${van.price}<span>/day</span></p>
        </div>
        <Badge variant={van.type}>{van.type}</Badge>
      </Link>
    </div>
  ))

  function handleFilter(e) {
    const value = e.currentTarget?.value
    if (!value) {
      return
    }
    setSearchParams(sp => {
      sp.delete("type")
      if (value !== "clear") {
        const newTypeFilter = typeFilter.includes(value) ? typeFilter.filter(el => el !== value) : [...typeFilter, value]
        for (const el of newTypeFilter) {
          sp.append("type", el)
        }
      }
      return sp
    })
  }

  function filterButton(value) {
    const isActiveFilter = typeFilter.length > 0 && typeFilter.includes(value)
    const classes = clsx("filter-button", isActiveFilter && "filter-button--active")
    return (
      <button className={classes} onClick={handleFilter} value={value}>
        <Badge variant={isActiveFilter && value}>{value}</Badge>
      </button>
    )
  }

  return (
    <div className="padded flow">
      <h1>Explore our van options</h1>
      <div className="van-list-filter">
        {filterButton("simple")}
        {filterButton("luxury")}
        {filterButton("rugged")}
        {typeFilter.length > 0 && <button onClick={handleFilter} value="clear" className="clear-filter">Clear filter</button>}
      </div>
      {vans && <div className="van-list">
        {vanItems}
      </div>}
    </div>
  )
}