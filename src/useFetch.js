import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setData(null)

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Response status: ${res.status} (${res.statusText})`)
        }
        return res.json()
      })
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        setError(e)
      })
  }, [url])

  return { data, error, loading }
}