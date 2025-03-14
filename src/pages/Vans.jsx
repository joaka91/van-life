import { useEffect, useState } from "react"
import VanItem from "../components/VanItem"

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
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <h1>Explore our van options</h1>
      {vans && <div className="van-list">
        {vans.map(van => <VanItem key={van.id} {...van} />)}
      </div>}
    </>
  )
}