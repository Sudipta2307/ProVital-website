"use client";

import React, { useState } from "react";
import "./Lifestyle.css";

const Lifestyle = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Manage the currently active card

  // Pillars data
  const pillars = [
    {
      title: "Nutrition",
      description:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      img: "/assets/image11.png",
    },
    {
      title: "Physical activity",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      img: "/assets/image12.png",
    },
    {
      title: "Restorative sleep",
      description:
        "Consistent, quality sleep is essential for cognitive function and physical health.",
      img: "/assets/image13.png",
    },
    {
      title: "Stress management",
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
      img: "/assets/image14.png",
    },
    {
      title: "Social connections",
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
      img: "/assets/image15.png",
    },
    {
      title: "Substance use management",
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      img: "/assets/image16.png",
    },
  ];

  // Handlers for navigation
  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lifestyle">
      {/* Gradient Strip */}
      <div className="gradient-strip"></div>

      {/* Section Main Title */}
      <h2 className="main-title">HOW IT WORKS</h2>

      {/* Section Header */}
      <div className="section-header">
        <h1 className="section-title">
          <span className="gradient-text">Lifestyle as medicine: </span>The six
          pillars
        </h1>
        <p className="section-description">
          Eddie Kerson provides a comprehensive guide to the six pillars of a
          healthy lifestyle.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-container">
        {pillars.map((pillar, index) => (
          <button
            key={pillar.title}
            className={`tab ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            {pillar.title}
          </button>
        ))}
        <button className="arrow left-arrow" onClick={scrollLeft}>
          <img src="/assets/left-arrow.png" alt="Left Arrow" />
        </button>
        <button className="arrow right-arrow" onClick={scrollRight}>
          <img src="/assets/right-arrow.png" alt="Right Arrow" />
        </button>
      </div>

      {/* Card Navigation Section */}
      <div className="carousel-container">
        <div className="cards-container">
          {pillars.map((pillar, index) => (
            <div
              className={`card ${index === currentIndex ? "active" : ""}`}
              key={index}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <img src={pillar.img} alt={pillar.title} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{pillar.title}</h3>
                <p className="card-description">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
