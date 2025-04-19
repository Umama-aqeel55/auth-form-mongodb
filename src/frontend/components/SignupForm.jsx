import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SignupForm = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      Swal.fire({
        icon: "success",
        title: "Signup Successful",
        text: res.data.message,
      });
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: err.response?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <div className="auth-card">
      <form className="form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
        <button type="submit">Sign Up</button>
        <p className="switch-text">
          Already have an account? <span onClick={switchToLogin}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
