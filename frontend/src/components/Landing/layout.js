import React, { useEffect, useState, useCallback } from "react";
import Lottie from "react-lottie";
import { withRouter } from "react-router-dom";
import axios from "axios";



import "./footer.css";
import HomepageHeading from "./homepage_heading";
import Navigation from "./navigation";


import Error from "../ErrorPage/error";

function Home(props) {



      return (
        <div>
          <div>
            <div
              className="seg"
              inverted
              color="#4A5934"
              textAlign="center"
              style={{ minHeight: 600 }}
              vertical
            >
            {/* navbar */}
           
                  <Navigation/>
              <div className="nav-img-logo">
              <img src="/images/navbar_logo.png" />

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

  
}

export default withRouter(Home);
