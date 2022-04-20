import React, { useEffect, useState, useCallback } from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import axios from "axios";
import DailyIframe from "@daily-co/daily-js";

import * as loading from "../../animations/loading.json";

import "./footer.css";
import HomepageHeading from "./homepage_heading";
import Navigation from "./navigation";


import Error from "../ErrorPage/error";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Home(props) {
  const [roomUrl, setRoomUrl] = useState(null);
  const [copyUrl, setCopyUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [callObject, setCallObject] = useState(null);
  const [fixed, setFixed] = useState(null);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  const handleCallback = () => {
    setLoading(true);

  };



  //if we aren't in call, show landing page

    if (!loading) {
      return (
        <div>
          <div
            once={false}
            onBottomPassed={showFixedMenu}
            onBottomPassedReverse={hideFixedMenu}
          >
            <div
              className="seg"
              inverted
              color="#4A5934"
              textAlign="center"
              style={{ minHeight: 600, padding: "1em 0em" }}
              vertical
            >
              <div inverted color="black">
                <div
                  stackable
                  inverted
                  fixed={fixed ? "top" : null}
                  pointing={!fixed}
                  secondary={!fixed}
                  size="large"
                >
                  <Navigation //Navigation bar for landing page showing currently active page as homepage or usage-steps page
                    active={props.active}
                    parentCallback={handleCallback}
                    parentCallback2={handleCallback}
                  />
                </div>
              </div>
              <HomepageHeading />
            </div>
          </div>

          {props.curr}
		
		<div class="footer-basic"  >
    	<footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-linkedin"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Blog</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="projects/project.html">Projects</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">BotSage © GuglyHacky, 2022</p>
        </footer>
 </div>
     
        </div>
      );
    } // if we are currently not in a call, nor in the landing page, i.e we are joining a call, show loading component
    else {
      return <Lottie options={defaultOptions1} height={600} width={600} />;
    }

  
}

export default withRouter(Home);
