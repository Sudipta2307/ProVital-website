import React from "react";
import "./PatientSignup.css";

const PatientSignup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add signup logic here
    alert("Patient signup submitted!");
  };

  const handleReset = () => {
    // Reset form fields if needed
    alert("Form reset!");
  };

  return (
    <div className="signup-page">
      <div className="signup-header">
        <img src="/assets/provital-logo.png" alt="ProVital Logo" />
        <h1>Patient Signup</h1>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>
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
            placeholder="Create a password"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            placeholder="Enter your gender"
            required
          />
        </div>
        <button className="signup-button" type="submit">
          Signup
        </button>
        <button className="reset-button" type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div className="additional-links">
        <a href="/login">Already have an account? Login</a>
      </div>
    </div>
  );
};

export default PatientSignup;
