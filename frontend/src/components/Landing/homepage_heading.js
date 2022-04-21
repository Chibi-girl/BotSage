import React from "react";
import { Link } from "react-router-dom";


const HomepageHeading = () => (
  <div className="homepage-title-wrapper">
  <div className="homepage-heading">
    {/* <h1
      content="BotSage"
      // style={{
      //   fontSize: "4em",
      //   fontWeight: "normal",
      //   marginBottom: 0,
      //   marginTop: "1.8em",
      // }}
      >
      BotSage
    </h1> */}
    <img src="/images/headingImage.png"/>
    <h2
      content="One stop solution for all your doubts"
      style={{
        fontSize: "2em",
        fontWeight: "normal",
        margin: "1.5em 0",
        marginLeft:"0.5em"
        
      }}
    >One stop solution for all your doubts!</h2>
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
