import React from "react";
import { Arrows } from "../components";

export default function Project() {
  function sumzAppClick() {
    window.open("https://github.com/sohankasturi/Summerizer-AI-web-app");
  }
  function sumzDeployedClick() {
    window.open("https://stunning-moonbeam-b4ee84.netlify.app/");
  }
  function netflixClick() {
    window.open("https://github.com/sohankasturi/Netflix");
  }
  function netflixDeployedClick() {
    window.open("https://charming-licorice-070d4a.netlify.app/");
  }
  function spotifyClick() {
    window.open("https://github.com/sohankasturi/Spotify-");
  }
  function spotifyDeployedClick() {
    window.open("https://sohankasturi.github.io/Spotify-/");
  }
  return (
    <>
      <div className="project--div">
        <h1 className="project--title">Projects I have built</h1>
        <div className="project--container">
          <div className="project--img" onClick={sumzDeployedClick}>
            <div className="project--overlay"></div>
          </div>
          <div className="project--desc">
            <h2 className="desc--title" onClick={sumzAppClick}>
              Summerizer App
            </h2>
            <div className="desc--para">
              <p className="para">
                A website used to Summerize a Website/Article developed
                 using React and Redux-tookit
              </p>
              <img
                className="project--links"
                src={"/images/social/github.svg"}
                onClick={sumzAppClick}
              />
            </div>
          </div>
        </div>
        <div className="project--container">
          <div className="project--desc">
            <h2 className="desc--title-2" onClick={netflixClick}>
              Netflix Clone
            </h2>
            <div className="desc--para-2">
              <p className="para">
                A basic clone of Netflix website with beautiful UI 
                developed using React
              </p>
              <img
                className="project--links-2"
                src={"/images/social/github.svg"}
                onClick={netflixClick}
              />
            </div>
          </div>
          <div className="project--img-2" onClick={netflixDeployedClick}>
            <div className="project--overlay"></div>
          </div>
        </div>
        <div className="project--container">
          <div className="project--img-3" onClick={spotifyDeployedClick}>
            <div className="project--overlay"></div>
          </div>
          <div className="project--desc">
            <h2 className="desc--title" onClick={spotifyClick}>
              Spotify Clone
            </h2>
            <div className="desc--para-3">
              <p className="para">A basic clone app of Spotify website. It's made with Html, 
                CSS and JAvaScript.</p>
              <img
                className="project--links"
                src={"/images/social/github.svg"}
                onClick={spotifyClick}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Arrows prev="/" next="/Blog" /> */}
    </>
  );
}
