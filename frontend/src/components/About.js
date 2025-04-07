"use client";

import React from "react";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <p>
          At <strong>Maverick Ignite</strong>, we leverage cutting-edge AI
          technology to deliver innovative solutions. Our mission is to
          empower businesses with smart, scalable, and efficient AI-powered
          tools.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To revolutionize industries with AI-driven automation and
              intelligence.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              Deliver seamless, AI-powered solutions that enhance efficiency
              and productivity.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 60px 20px;
          text-align: center;
          background: linear-gradient(135deg, #111, #222);
          color: white;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
        }
        .about-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .about-card {
          background: #333;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          flex: 1;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
      `}</style>
    </section>
  );
}
