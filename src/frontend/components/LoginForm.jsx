import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = ({ switchToSignup }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: res.data.message,
      });
      setFormData({ email: "", password: "" });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.response?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <div className="auth-card">
      <form className="form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
        <p className="switch-text">
          Don’t have an account? <span onClick={switchToSignup}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
