import React from "react";
import "./HeroSection.css"; // Add styles in a CSS file

const HeroSection = () => {

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-main">
            <span className="logo-highlight">AIMERZ</span>
            <span className="logo-dot">.ai</span>
          </div>
          <p className="logo-subtitle">Aim.Act.Achieve</p>
        </div>
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#job-fair">Job Fair</a>
          </nav>
          <button className="login-btn">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>India's First</span> <br />
            Job Focused Learning Platform
          </h1>
          <p className="hero-description">
            Whether you're looking to upskill with our in-demand programs or
            seeking job placements through our platform, we have solutions for
            all your career needs!
          </p>
          <button className="chat-btn">Chat with us!</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/600x400" // Replace with your actual image URL
            alt="Learning Platform"
          />
        </div>
      </main>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-box">
          <h3>99.25%</h3>
          <p>5 Star Ratings</p>
        </div>
        <div className="info-box">
          <h3>50+</h3>
          <p>Job Opportunities</p>
        </div>
        <div className="info-box">
          <h3>Quality</h3>
          <p>Affordable Programs</p>
        </div>
        <div className="info-box">
          <h3>200+</h3>
          <p>Hiring Partners</p>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
