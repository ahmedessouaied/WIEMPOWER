"use client"
import React from 'react';
import "./style.css";

const About = () => (
  <div className="diffSection" id="about_section">
    <center><p style={{ fontSize: '50px', padding: '100px' }}>About</p></center>
    <div className="about-content">
      <div className="side-image">
        <img className="sideImage" src="/images/e3.jpg" alt="About" />
      </div>
      <div className="side-text">
        <h2>What you think about us?</h2>
        <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values...</p>
      </div>
    </div>
  </div>
);

export default About;
