import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      if (res.ok) {
        setData(data)
      } else {
        setError(new Error(`${res.status} (${res.statusText})${data?.message && ": " + data.message}`))
      }

      setLoading(false)
    } 
    fetchData()
  }, [url])

  return { data, error, loading }
}