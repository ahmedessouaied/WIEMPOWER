"use client";
import React from "react";
import "./style.css";
const Reviews = () => (
  <div className="review">
    <div className="diffSection" id="review_section">
      <center>
        <p
          style={{
            fontSize: "40px",
            padding: "100px 0 40px",
            color: "#2E3D49",
          }}
        >
          What the Students Say About Us?
        </p>
      </center>
    </div>
    <div className="rev-container">
      <div className="rev-card">
        <div className="identity">
          <img src="/images/humanNotExist1.jpg" alt="Sophie Daniel" />
          <p>Sophie Daniel</p>
          <h6>Java</h6>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <img src="/images/star.png" key={i} alt="star" />
            ))}
          </div>
        </div>
        <div className="rev-cont">
          <p id="title">Review:</p>
          <p id="content">
            I did Java Fundamental course with Rishab Sir. It was a great
            experience...
          </p>
        </div>
      </div>
      <div className="rev-card">
        <div className="identity">
          <img src="/images/humanNotExist4.jpg" alt="Sophie Daniel" />
          <p>Katya George</p>
          <h6>Kotlin</h6>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <img src="/images/star.png" key={i} alt="star" />
            ))}
          </div>
        </div>
        <div className="rev-cont">
          <p id="title">Review:</p>
          <p id="content">
            Working with Laila is something else , she is so helpful .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Reviews;
