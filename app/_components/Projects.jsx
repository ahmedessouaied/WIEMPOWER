"use client";
import React from "react";
import "./style.css";
import { User } from "lucide-react";
import Link from "next/link";
const Projects = () => (
  <section id="projects">
    <center>
      <p
        style={{
          fontSize: "50px",
          paddingTop: "100px",
          paddingBottom: "60px",
          color: "black",
        }}
      >
        Latest Projects
      </p>
    </center>
    <div className="container">
      <div className="card-container">
        <Link href="/project-detail1">
          <img
            className="hero-image"
            src="/images/app-develbbbbbbbbb.jpg"
            alt="Web Project"
          />
        </Link>
        <main className="main-content">
          <p>
            Web Project: Building websites or web apps for online information or
            services.
          </p>
          <div className="flex-row">
            <div className="coin-base mr-5">
              <User />
              <h2>3</h2>
            </div>
            <div className="time-left">
              <img
                src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
                alt="clock"
                className="small-image"
              />
              <p>3 days left</p>
            </div>
          </div>
        </main>
        <div className="card-attribute">
          <img
            src="/images/woman-with-freckles-her-face_1197721-99165.jpg"
            alt="avatar"
            className="small-avatar"
          />
          <p>
            {" "}
            <span>
              <a href="#">ones Noa</a>
            </span>
          </p>
        </div>
      </div>
      <div className="card-container">
        <Link href="/project-detail1">
          <img
            className="hero-image"
            src="/images/app-develbbbbbbbbb.jpg"
            alt="Web Project"
          />
        </Link>
        <main className="main-content">
          <p>
            Web Project: Building websites or web apps for online information or
            services.
          </p>
          <div className="flex-row">
            <div className="coin-base mr-5">
              <User />
              <h2>3</h2>
            </div>
            <div className="time-left">
              <img
                src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
                alt="clock"
                className="small-image"
              />
              <p>3 days left</p>
            </div>
          </div>
        </main>
        <div className="card-attribute">
          <img
            src="/images/woman-with-freckles-her-face_1197721-99165.jpg"
            alt="avatar"
            className="small-avatar"
          />
          <p>
            {" "}
            <span>
              <a href="#">ones Noa</a>
            </span>
          </p>
        </div>
      </div>
      <div className="card-container">
        <Link href="/project-detail1">
          <img
            className="hero-image"
            src="/images/app-develbbbbbbbbb.jpg"
            alt="Web Project"
          />
        </Link>
        <main className="main-content">
          <p>
            Web Project: Building websites or web apps for online information or
            services.
          </p>
          <div className="flex-row">
            <div className="coin-base mr-5">
              <User />
              <h2>3</h2>
            </div>
            <div className="time-left">
              <img
                src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
                alt="clock"
                className="small-image"
              />
              <p>3 days left</p>
            </div>
          </div>
        </main>
        <div className="card-attribute">
          <img
            src="/images/woman-with-freckles-her-face_1197721-99165.jpg"
            alt="avatar"
            className="small-avatar"
          />
          <p>
            {" "}
            <span>
              <a href="#">ones Noa</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
