import React, { useState } from "react";
import "./DoctorSignup.css";

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add backend API integration logic here
    alert("Doctor signup submitted successfully!");
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      specialization: "",
    });
  };

  return (
    <div className="signup-page">
      {/* Header Section */}
      <div className="signup-header">
        <img src="/assets/provital-logo.png" alt="ProVital Logo" />
        <h1>Doctor Signup</h1>
      </div>

      {/* Form Section */}
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            placeholder="Enter your specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
        </div>
        {/* Buttons */}
        <button className="signup-button" type="submit">
          Signup
        </button>
        <button className="reset-button" type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {/* Additional Links */}
      <div className="additional-links">
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignup;
