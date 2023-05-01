import React from "react";

export default function Contact() {
  function twtClick() {
    window.open("https://twitter.com/KasturiSohan");
  }

  // function hashClick() {
  //   window.open("https://dhrumishah.hashnode.dev/");
  // }
  function gitClick() {
    window.open("https://github.com/sohankasturi");
  }
  function linkedClick() {
    window.open("https://www.linkedin.com/in/sohan-kumar-kasturi-4931201b0/");
  }
  return (
    <>
      <div>
        <h1 className="contact--title">Looking to Collaborate? Let's Talk!</h1>
        <div className="contact--para animate__animated animate__zoomInLeft">
          <p>
            I enjoy working on developing Web Applications, and I can create a 
            website with beautiful UI, I'm eager to work on the MERN stack 
            Technologis such as MongoDB, ExpressJS, ReactJS and NodeJs. Iam 
            also intrested in contributing to Open source Projects, 
            Currently I'm looking for a employment oppurtunity to utilise my 
            hands on experience on building challenging projects and contribute
            to the Organisation.
          </p>
        </div>
        <div className="contact--links">
          <p>
            Shoot me an email on{" "}
            <a
              href="mailto:sohankasturi999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="jsx-8b75a9ccf5c40d44 mr-1 inline-flex items-center space-x-1 text-gray-300 transition duration-200 gradient-underline no-underline text-blue-400 hover:text-blue-300 text-blue-400 hover:!text-blue-300"
            >
              <span className="jsx-8b75a9ccf5c40d44">
                sohankasturi999@gmail.com
              </span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </p>
          <div className="contact--socials">
            <img
              src={"/images/social/twitter.svg"}
              onClick={twtClick}
              className="animate__animated animate__bounceInDown"
            />
            {/* <img
              src={"/images/social/hashnode.svg"}
              onClick={hashClick}
              className="animate__animated animate__bounceInUp"
            /> */}
            <img
              src={"/images/social/github.svg"}
              onClick={gitClick}
              className="animate__animated animate__bounceInDown"
            />
            <img
              src={"/images/social/linkedin.svg"}
              onClick={linkedClick}
              className="animate__animated animate__bounceInUp"
            />
          </div>
        </div>
        <div className="footer-container">
          {/* <div className="footer-social">
            <div className="animate__animated animate__flash animate__infinite animate__slow">
              <a href="https://www.instagram.com/sohan_kasturi_72/">
                <img
                  src="https://img.shields.io/twitter/follow/deetwts?label=Twitter&amp;logo=twitter&amp;style=for-the-badge"
                  alt="Twitter badge"
                />
              </a>
            </div>
            <div className="animate__animated animate__flash animate__infinite animate__slow">
              <a href="https://github.com/sohankasturi">
                <img
                  src="https://img.shields.io/github/followers/sohankasturi?label=Followers&amp;logo=GitHub&amp;style=for-the-badge"
                  alt="GitHub badge"
                />
              </a>
            </div>
          </div> */}
          <p>Copyright © Sohan Kumar Kasthuri 2023, All rights reserved</p>
        </div>
      </div>
    </>
  );
}
