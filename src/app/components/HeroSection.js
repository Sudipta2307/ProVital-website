"use client";
import React from "react";
import "./HeroSection.css";

const SearchBar = () => {
  return (
    <section className="hero-section-container">
      {/* Image Carousel Section */}
      <div className="image-carousel-background">
        <div className="image-carousel">
          <div className="image-column scroll-down">
            <img src="/assets/image1.png" alt="Lifestyle 1" loading="lazy" />
            <img src="/assets/image2.png" alt="Lifestyle 2" loading="lazy" />
            <img src="/assets/image3.png" alt="Lifestyle 3" loading="lazy" />
          </div>
          <div className="image-column scroll-up">
            <img src="/assets/image4.png" alt="Lifestyle 4" loading="lazy" />
            <img src="/assets/image5.png" alt="Lifestyle 5" loading="lazy" />
            <img src="/assets/image6.png" alt="Lifestyle 6" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Welcome Text Section */}
      <div className="welcome-text">
        <header className="header">
          <h1>
            Book an appointment with <br />
            <span>lifestyle medicine</span> experts
          </h1>
        </header>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>

      {/* Search Bar Section */}
      <div className="search-bar-container">
        <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
          <img
            src="/assets/search.png"
            alt="search-logo"
            loading="lazy"
            className="icon1"
          />
          <input
            type="text"
            id="condition"
            placeholder="Condition, procedure, specialty..."
            aria-label="Enter condition or specialty"
          />
          <input
            type="text"
            id="location"
            placeholder="City, state, or zipcode..."
            aria-label="Enter location"
          />
          <select id="insurance" aria-label="Select insurance provider">
            <option value="">Insurance carrier</option>
            <option value="provider1">Provider 1</option>
            <option value="provider2">Provider 2</option>
          </select>
          <button type="submit" aria-label="Search now">
            Find now
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
