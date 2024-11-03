"use client"
import React from 'react';
import "./style.css";

const Feedback = () => (
  <div className="title2" id="feedBACK">
    <span>Give Feedback</span>
    <div className="shortdesc2">
      <p>Please share your valuable feedback with us</p>
    </div>
    <div className="feedbox">
      <div className="feed">
        <form action="mailto:roshank9419@gmail.com" method="post" encType="text/plain">
          <label>Your Name</label><br />
          <input type="text" name="fname" className="fname" required /><br />
          <label>Email</label><br />
          <input type="email" name="mail" required /><br />
          <label>Additional Details</label><br />
          <textarea name="additional"></textarea><br />
          <button type="submit" id="csubmit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export default Feedback;
