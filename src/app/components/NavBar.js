"use client"; // Ensures client-side rendering for the component

import React, { useState } from "react";
import Link from "next/link";
import "./NavBar.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <header className="header1">
      {/* Logo Section */}
      <div className="logo">
        <Link href="/">
          <img
            src="/assets/provital-logo.png"
            alt="ProVital Logo"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link href="/list-practice">List your practice</Link>
        <span>|</span>
        <Link href="/for-employers">For Employers</Link>
        <span>|</span>
        <Link href="/courses">Courses</Link>
        <span>|</span>
        <Link href="/books">Books</Link>
        <span>|</span>
        <Link href="/speakers">Speakers</Link>
        <span>|</span>
        <Link href="/doctors">Doctors</Link>
        <span>|</span>

        {/* Dropdown Menu for Login/Signup */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            Login / Signup &#x25BC;
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <strong>Doctor</strong>
                <Link href="/DoctorLogin">Login</Link>
                <Link href="/DoctorSignup">Sign up</Link>
              </div>
              <div className="dropdown-item">
                <strong>Patient</strong>
                <Link href="/PatientLogin">Login</Link>
                <Link href="/PatientSignup">Sign up</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
