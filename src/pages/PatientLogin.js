import React from "react";
import "./PatientLogin.css";

const PatientLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    alert("Patient login submitted!");
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img src="/assets/provital-logo.png" alt="ProVital Logo" />
        <h1>Patient Login</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <div className="forgot-password">
          <a href="/ForgotPassword">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default PatientLogin;
