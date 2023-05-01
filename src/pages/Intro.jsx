import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <div className="intro--div">
        <h1 className="intro--title">Readme.md</h1>
        <div className="intro--section">
          <div className="intro--gif animate__animated animate__slideInLeft">
            <img src="/images/svg_2.gif" />
          </div>
          <div className="intro--content animate__animated animate__fadeInDown">
            <p className="intro--para">
              I am a MERN Stack developer who loves to create awesome projects 
              and I love to play with JavaScript and React to create a beautiful
              UI. I enjoy building Web Apps and I'm interested to learn web 3.0 
              Technologies such as Blockchain development etc.,
            </p>
            <p className="intro--para">
              These days, I'm trying to get involved in building projects to 
              sharpen up my Frontend and Backend skills.
            </p>
            <p className="intro--para">
              I love contributing to open source projects.
            </p>
            <h3 className="intro--tech">Technologies I have worked with:</h3>
            <ul className="intro--techStack">
              <li className="intro--li">HTML</li>
              <li className="intro--li">CSS3</li>
              <li className="intro--li">JavaScript</li>
              <li className="intro--li">Tailwind CSS</li>
              <li className="intro--li">ReactJS</li>
              <li className="intro--li">NodeJS</li>
              <li className="intro--li">ExpressJS</li>
              <li className="intro--li">MongoDB</li>
              <li className="intro--li">Git</li>
              <li className="intro--li">Java</li>
              <li className="intro--li">DSA</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="about--arrows">
        <Link to="/">
          <img className="left--arrows" src={"/images/left-arrow.svg"} />
        </Link>
        <Link to="/Project">
          <img className="right--arrows" src={"/images/right-arrow.svg"} />
        </Link>
      </div> */}
    </>
  );
}
