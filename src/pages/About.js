import React from "react";

import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="header">
      <img src="https://source.unsplash.com/300x200/?mountain,water" alt="" />
      <div className="main">
        <h1>
          UI/UX <br />
          Designer About
        </h1>
        <p>
          Front-End Desinger. Also working on Back-end. <br />
          UX/UI designs, product designs, web designs, and motion animations
        </p>
        <button className="btn">
          <Link to="/About">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
