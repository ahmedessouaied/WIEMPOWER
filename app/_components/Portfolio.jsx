"use client"
import React from 'react';
import "./style.css";
const Portfolio = () => (
  <div className="diffSection" id="portfolio_section">
    <center><p style={{ fontSize: '50px', padding: '100px 0 40px' }}>Portfolio</p></center>
    <div className="content">
      <p>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”...</p>
    </div>
    <div className="extra">
      <p>We're increasing this data every year</p>
      <div className="smbox">
        <span><center><div className="data">154</div><div className="det">Enrolled Students</div></center></span>
        <span><center><div className="data">62</div><div className="det">Total Courses</div></center></span>
        <span><center><div className="data">56</div><div className="det">Placed Students</div></center></span>
        <span><center><div className="data">27</div><div className="det">Total Projects</div></center></span>
      </div>
    </div>
  </div>
);

export default Portfolio;
