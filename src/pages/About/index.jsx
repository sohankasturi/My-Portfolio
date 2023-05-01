import React from "react";
import "./index.css";
export default function About() {
  function btnClick() {
    window.open(
      "https://drive.google.com/file/d/1pZ8RY1w8HqM9aHMI03T8iKoaKwWa_cTR/view?usp=drivesdk"
    );
  }
  return (
    <div className="about--section container">
      <div className="about--heading">
        <h1 className="about--title animate__animated animate__fadeInLeft animate__slow">
          {/* Hi 👋, Dhrumi Shah */}
          Hey 👋, I'm Sohan Kumar Kasthuri
        </h1>
        <h2 className="about--content animate__animated animate__zoomInUp animate__slow">
          {/* A Frontend Developer, Content creator & Technical Writer */}
          A Software Developer proficient in  MERN Stack Development
        </h2>
        <p className="about--para animate__animated animate__zoomInUp animate__slow">
          With the passion of contributing to open source projects.
        </p>
        <button
          onClick={btnClick}
          className="about--btn animate__animated animate__zoomInUp animate__slow"
        >
          View Resume
        </button>
      </div>

      <div className="about--profile">
        <img
          src={"/images/profile1.jpg"}
          className="about--profileImage animate__animated animate__zoomIn animate__slow"
        />
      </div>
    </div>
  );
}
