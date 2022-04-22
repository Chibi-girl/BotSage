import React from "react";
import { Link } from "react-router-dom";


const HomepageHeading = () => (
  <div className="homepage-title-wrapper">
  <div className="homepage-heading">
    {}
    <img src="/images/headingImage.png"/>
    <h2
      content="Your smart doubt-solving companion"
      style={{
        fontSize: "2em",
        fontWeight: "normal",
        margin: "1.5em 0",
        marginLeft:"0.5em"
        
      }}
    >Your smart doubt-solving companion</h2>
    <button className = "get-started-btn" as={Link} to="/signup">
      Get Started
      <icon name="right arrow" />
    </button>
  </div>
  <div className="homepage-illustration">
     <img src="/images/homepagetitleSage.png"/>
  </div>
  </div>
);


export default HomepageHeading;
