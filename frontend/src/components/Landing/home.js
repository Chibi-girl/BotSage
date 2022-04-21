import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import CommonPage from "./commonpage";
import "./home.css";

function Home() {
  const data = [{
    title: "Title -1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    img: "Image-1.png"
  },
  {
    title: "Title -2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    img: "Image-2.png"
  },
  {
    title: "Title -3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    img: "Image-3.png"
  }
  ];
  // // component to be rendered when user is in home page
  const home = (
    <div className='information-wrapper'>
      <div className='information-title'>
        What BotSage Offers
      </div>
      {
        data.map((item, i) => {
          return (
            <div className='information-content'>
              <div className='left-infomation-content'>
                <img src="/images/navbar_logo.png" />
              </div>
              <div className='right-information-content'>
                <div className='information-title-content'>
                  {item.title}
                </div>
                <div className='information-desc'>
                  {item.desc}
                </div>
              </div>
            </div>
          )
        })
      }


    </div>

  )


  return (
    <CommonPage curr={home} active="home" />
  );



}





export default Home;
