import React from 'react';
import './HeroSection.css';

// We only need to import the 'hero.png' file path if using it in JS, but 
// since we're using it in CSS, the path is handled there.

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* 1. Top Content: Text and App Badges */}
      <div className="hero-top-content">
        <h1>We Build <span className="gradient-text">Productive</span> Apps </h1>
        <p className="hero-subtitle">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="app-badges">
          {/* REPLACED WITH TEXT/CSS ICON BADGES */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="app-badge google">
            <span className="badge-icon">▶</span> Google Play
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="app-badge appstore">
            <span className="badge-icon"></span> App Store
          </a>
        </div>
      </div>

      {/* 2. Central Graphic: Placeholder for the 'hero.png' background image */}
      <div className="hero-graphic-placeholder">
        {/* The combined image (phone and icons) is set as a background-image in CSS */}
      </div>

      {/* 3. Statistics Bar (Bottom Purple Section) */}
      <div className="hero-stats-bar">
        <h2 className="stats-bar-title">Trusted By Millions, Built For You</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">29.6M</span>
            <span className="stat-label">Total Downloads</span>
            <span className="stat-change">21% More Than Last Month</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">906K</span>
            <span className="stat-label">Total Reviews</span>
            <span className="stat-change">46% More Than Last Month</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">132+</span>
            <span className="stat-label">Active Apps</span>
            <span className="stat-change">31 More Will Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;