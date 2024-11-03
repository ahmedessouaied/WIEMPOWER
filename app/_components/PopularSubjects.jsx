"use client";
import React from "react";
import "./style.css";
import Link from "next/link";

const PopularSubjects = () => (
  <div className="title">
    <span className="text-5xl">Popular Subjects</span>
    <br />
    <br />
    <div className="course">
      <center>
        <div className="cbox">
          <div className="det">
            <a href="subjects/jee.html">
              <img src="./images/book.png" alt="JEE" />
              JEE Preparation
            </a>
          </div>
          <div className="det">
            <a href="subjects/gate.html">
              <img src="/images/d1.png" alt="GATE" />
              GATE Preparation
            </a>
          </div>
          <div className="det">
            <a href="subjects/jee.html#sample_papers">
              <img src="/images/paper.png" alt="Sample Papers" />
              Sample Papers
            </a>
          </div>
          <div className="det">
            <Link href="/subject1">
              <img src="/images/d1.png" alt="Daily Quiz" />
              Daily Quiz
            </Link>
          </div>
        </div>
      </center>
      <div className="cbox">
        <div className="det">
          <a href="subjects/computer_courses.html">
            <img src="/images/computer.png" alt="Computer Courses" />
            Computer Courses
          </a>
        </div>
        <div className="det">
          <a href="subjects/computer_courses.html#data">
            <img src="/images/data.png" alt="Data Structures" />
            Data Structures
          </a>
        </div>
        <div className="det">
          <a href="subjects/computer_courses.html#algo">
            <img src="/images/algo.png" alt="Algorithm" />
            Algorithm
          </a>
        </div>
        <div className="det det-last">
          <a href="subjects/computer_courses.html#projects">
            <img src="/images/projects.png" alt="Projects" />
            Projects
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default PopularSubjects;
