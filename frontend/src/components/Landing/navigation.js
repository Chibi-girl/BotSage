import { withRouter, Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./navbar.css"


function Navigation(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);



    return (
    <nav className="navigation">
      {/* <a href="/" className="brand-name">
        BotSage
      </a> */}
      {/* <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      > */}
        {/* hamburger svg code... */}
      {/* </button> */}
      {/* <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/forum">Forum</a>
          </li>
        </ul>
      </div> */}
      <a href="/forum">Forum</a>
      <a href="/login">Login</a>
     
      
    </nav>
    );
}

export default withRouter(Navigation);
