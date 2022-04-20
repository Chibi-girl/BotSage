import { withRouter, Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Auth from "../auth/authenticate";
import userContext from "../../GlobalContext/userContext";
import "./navbar.css"


function Navigation(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e, { value }) => {
    //setting url of room to be joined from within join room modal
    setError(false);
    setUrl(value);
  };

  const handleSubmit = (e) => {
    // function for logging out user fired when Log Out button is clicked
    setLoading(true);
    const payload = {
      email: userContext.getEmail(),
      status: "logging out",
    };

    axios //call to backend to log out user with specified email
      .post("https://cross-roads.herokuapp.com/loggingUser", payload)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          localStorage.removeItem("username");
          localStorage.setItem("visit", "notfirst");
          window.location.reload();
          console.log(userContext.getData());
        } else {
          console.log("Some error ocurred");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (Auth.isAuthenticated()) {
    // if user has logged in previously allow him to start/join calls
    return (
      <nav className="navigation">
      <a href="/" className="brand-name">
        BotSage
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/logout">Logout</a>
          </li>
          <li>
            <a href="/forum">Forum</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  } 
  //if user has logged out or it's his first visit, prompt him to sign in/log in
  else
    return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        BotSage
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
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
      </div>
    </nav>
    );
}

export default withRouter(Navigation);
