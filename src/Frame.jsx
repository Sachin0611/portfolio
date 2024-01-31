import React from "react";
import "./style.css";
import ScrollableContent from "./scrollableContent.jsx";

const Frame = () => {
  return (
    <div className="frame">
      <div className="scrollable">
      <div className="fixed-container">
        <div className="intro-container">
          <span className="name"> Sachin Pandey</span>
          <span className="designation"> Software Engineer @ Morgan Stanley</span>
          <span className="about">I code to make cool things!</span>
        </div>

        <div className="navigate-content">
          <nav>
            <ul>
              <li>
                <div className="navigate-links">
                  <a href="#">
                    <span className="nav-indicator"></span>
                    <span className="nav-text">ABOUT</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="navigate-links">
                  <a href="#">
                    <span className="nav-indicator"></span>
                    <span className="nav-text">EXPERIENCE</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="navigate-links">
                  <a href="#">
                    <span className="nav-indicator"></span>
                    <span className="nav-text">PROJECTS</span>
                  </a>
                </div>
              </li>
            </ul>
          </nav>

        </div>
        <span className="social-media">
          <a href="https://github.com/Sachin0611" target="blank"><img className="social-media-icons" src="/github-icon.svg" /></a>
          <a href="https://www.linkedin.com/in/sachin-pandey-b4044020a/" target="blank"><img className="social-media-icons" src="/linkedin-icon.svg" /></a>
          <a href="https://www.instagram.com/sachin__.__pandey/" target="blank"><img className="social-media-icons" src="/insta-icon.svg" /></a>
        </span>

      </div>
    <ScrollableContent/>
    </div>

    </div >
  );
};

export default Frame;
