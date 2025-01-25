'use client'
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Space for Developers</h1>
        <p>Embark on your coding journey with expert guidance and hands-on learning</p>
        <div className="hero-buttons">
          <a href="#courses" className="cta-button primary">
            Start Learning
          </a>
          <a href="#programs" className="cta-button secondary">
            View Programs
          </a>
        </div>
      </div>
      {/* Add the Glass Sheet */}
      <div className="glass-sheet">
      <pre className="text">print("Welcome to space for developers")</pre>
      </div>
    </section>
  );
};

export default HeroSection;
