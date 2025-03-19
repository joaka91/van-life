import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })

  function login(formData) { 
    setLoginFormData({email: formData.get("email"), password: formData.get("password")})
  }

  return (
    <div className="padded flow center">
      <h1>Sign in to your account</h1>
      <div>
        <form action={login} className="login-form">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="cta">Login</button>
        </form>
      </div>
    </div>
  )
}