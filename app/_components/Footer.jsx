"use client";
import React from "react";
import "./style.css";

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="left-col">
        <img
          src="/images/logo - Copy.png"
          style={{ width: "200px" }}
          alt="LearnEd logo"
        />
        <div className="social-media">
          <a href="#">
            <img src="images/fb.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="images/insta.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="images/tt.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="images/ytube.png" alt="YouTube" />
          </a>
          <a href="#">
            <img src="images/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        <p>
          <img src="images/phone.png" alt="phone" /> +216 256659847
          <br />
          <img src="images/mail.png" alt="email" /> fortes_feminae@gmail.com
        </p>
      </div>
      <div className="right-col">
        <h1 style={{ color: "#fff" }}>Our Newsletter</h1>
        <div className="border"></div>
        <br />
        <p>Enter Your Email to get our News and updates.</p>
        <form className="newsletter-form">
          <input className="txtb" type="email" placeholder="Enter Your Email" />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;
