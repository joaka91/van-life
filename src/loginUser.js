export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error(`${res.status} (${res.statusText}): ${data.message}`)
  }

  return data
}