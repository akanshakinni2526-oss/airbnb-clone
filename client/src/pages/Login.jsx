import { useState } from "react";
import API from "../api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
  const response = await API.post("/api/auth/login", formData);

localStorage.setItem("token", response.data.token);
localStorage.setItem("user", JSON.stringify(response.data.user));

alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?
          <a href="/signup"> Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;