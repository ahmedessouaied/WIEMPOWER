"use client";
import React from "react";
import "./style.css";
const Services = () => (
  <div id="services" className="service-swipe">
    <div className="diffSection" id="services_section">
      <center>
        <p style={{ fontSize: "50px", padding: "100px 0 40px", color: "#fff" }}>
          Services
        </p>
      </center>
    </div>
    <a>
      <div className="s-card">
        <img src="/images/computer-courses.png" alt="Computer Courses" />
        <p>Free Online Computer Courses</p>
      </div>
    </a>
    <a>
      <div className="s-card">
        <img src="/images/papers.jpg" alt="Computer Courses" />
        <p>Free Education Ressources</p>
      </div>
    </a>
    <a>
      <div className="s-card">
        <img src="/images/help.png" alt="Computer Courses" />
        <p>24/7 Virtual Teacher</p>
      </div>
    </a>
    <a>
      <div className="s-card">
        <img src="/images/p3.png" alt="Computer Courses" />
        <p>Project Collaborations</p>
      </div>
    </a>
    {/* Repeat for each service */}
  </div>
);

export default Services;
