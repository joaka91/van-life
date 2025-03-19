import { useState } from "react";
import { useLocation } from "react-router";
import { loginUser } from "../loginUser";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
  const location = useLocation()

  function handleLogin(formData) {
    const creds = { email: formData.get("email"), password: formData.get("password") }
    setLoginFormData(creds)
    loginUser(creds)
      .then(data => console.log(data))
      .catch(e => console.log(e))
  }

  return (
    <div className="padded flow center">
      {location.state && <p><strong>{location.state.message}</strong></p>}
      <h1>Sign in to your account</h1>
      <div>
        <form action={handleLogin} className="login-form">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="cta">Login</button>
        </form>
      </div>
    </div>
  )
}