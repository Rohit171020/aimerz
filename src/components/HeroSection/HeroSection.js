import React from "react";
import "./HeroSection.css"; // Add styles in a CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>India's First Job Focused Learning Platform</h1>
        <p>
          Whether you're looking to upskill with our in-demand programs or 
          seeking job placements through our platform, we have solutions 
          for all your career needs!
        </p>
        <button className="chat-button">
          <img src="whatsapp-icon.png" alt="WhatsApp" /> Chat with us!
        </button>
      </div>

      <div className="hero-image">
        <img src="hero-image.png" alt="Learning Platform" />
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-value">99.25%</span>
          <span className="stat-text">5 Star Ratings</span>
        </div>
        <div className="stat">
          <span className="stat-value">50+</span>
          <span className="stat-text">Job Opportunities</span>
        </div>
        <div className="stat">
          <span className="stat-value">Quality</span>
          <span className="stat-text">Affordable Programs</span>
        </div>
        <div className="stat">
          <span className="stat-value">200+</span>
          <span className="stat-text">Hiring Partners</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
