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
          <img className="hero-image" src="/images/cn.jpg" alt="Web Project" />
        </Link>
        <main className="main-content">
          <p>
            Networking Project:<br></br> Building network architecture for a
            fictional small company .
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
              <p>3 days ago</p>
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
            <span className="ml-4 bg-pink-400 border-none w-10 h-6 rounded-md p-1">
              Protocols
            </span>
            <span className="ml-4 bg-pink-400 border-none w-10 h-6 rounded-md p-1">
              Routing
            </span>
          </p>
        </div>
      </div>
      <div className="card-container">
        <Link href="/project-detail1">
          <img
            className="hero-image"
            src="/images/math.jpg"
            alt="Web Project"
          />
        </Link>
        <main className="main-content">
          <p>
            Math:<br></br> Basic addition,substruction,multiplication and
            division problems .
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
              <p>3 days ago</p>
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
            <span className="ml-4 bg-pink-400 border-none w-10 h-6 rounded-md p-1">
              Algebra
            </span>
          </p>
        </div>
      </div>
      <div className="card-container">
        <Link href="/project-detail1">
          <img className="hero-image" src="/images/os.jpg" alt="Web Project" />
        </Link>
        <main className="main-content">
          <p>
            OS:<br></br> Exploring differences between operating systems.
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
              <p>3 days ago</p>
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
            <span className="ml-4 bg-pink-400 border-none w-10 h-6 rounded-md p-1 ">
              Linux
            </span>
            <span className="ml-4 bg-pink-400 border-none w-10 h-6 rounded-md p-1">
              Ubuntu
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
