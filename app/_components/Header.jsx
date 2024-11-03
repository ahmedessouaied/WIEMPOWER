"use client";
import React, { useEffect } from "react";
import "./style.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav.classList.add("black");
      } else {
        nav.classList.remove("black");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header">
      <div className="head-container">
        <div className="quote">
          <p>
            The beautiful thing about learning is that nobody can take it away
            from you
          </p>
          <h5>
            Education is the process of facilitating learning, or the
            acquisition of knowledge, skills, values, beliefs, and habits...
          </h5>
        </div>
        <div className="svg-image">
          <img src="/images/svg1.jpg" alt="svg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
