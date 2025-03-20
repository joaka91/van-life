import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { loginUser } from "../loginUser";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from || "/host"

  function handleLogin(formData) {
    const creds = { email: formData.get("email"), password: formData.get("password") }
    setStatus("submitting")
    setError(null)
    loginUser(creds)
      .then(data => {
        localStorage.setItem("loggedin", true)
        navigate(from, { replace: true }) // Replace history stack route
      })
      .catch(e => setError(e))
      .finally(() => {
        setLoginFormData({ email: loginFormData.email, password: "" })
        setStatus("idle")
      })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="padded flow center">
      {location.state?.message && <p><strong>{location.state.message}</strong></p>}
      <h1>Sign in to your account</h1>
      {error?.message && <p>{error.message}</p>}
      <div>
        <form action={handleLogin} className="login-form">
          <input type="email" name="email" placeholder="Email" value={loginFormData.email} onChange={handleChange} disabled={status === "submitting"} />
          <input type="password" name="password" placeholder="Password" value={loginFormData.password} onChange={handleChange} disabled={status === "submitting"} />
          <button className="cta" disabled={status === "submitting"}>
            {status === "idle" && "Login"}
            {status === "submitting" && "Logging in..."}
          </button>
        </form>
      </div>
    </div>
  )
}