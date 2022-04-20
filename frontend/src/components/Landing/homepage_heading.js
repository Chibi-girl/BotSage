import React from "react";
import { Link } from "react-router-dom";

const HomepageHeading = () => (
  <div>
    <h1
      content="BotSage"
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "1.8em",
      }}>
      BotSage
    </h1>
    <h2
      content="One stop solution for all your doubts"
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "1.5em",
      }}
    >One stop solution for all your doubts</h2>
    <button primary size="huge" as={Link} to="/signup">
      Get Started
      <icon name="right arrow" />
    </button>
  </div>
);


export default HomepageHeading;
