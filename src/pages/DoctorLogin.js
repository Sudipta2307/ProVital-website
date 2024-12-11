import React from "react";
import "./DoctorLogin.css";

const DoctorLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation or API request logic here
    alert("Login submitted!");
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img src="/assets/provital-logo.png" alt="ProVital Logo" />
        <h1>Doctor Login</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Username/Email Input */}
        <div className="input-field">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username or email"
            required
          />
        </div>

        {/* Password Input */}
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

        {/* Submit Button */}
        <button className="login-button" type="submit">
          Login
        </button>

        {/* Forgot Password Link */}
        <div className="forgot-password">
          <a href="/ForgotPassword">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default DoctorLogin;
