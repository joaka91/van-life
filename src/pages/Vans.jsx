import { useEffect, useState } from "react"

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

  console.log(vans)

  return (
    <>
      <h1>Vans</h1>
    </>
  )
}