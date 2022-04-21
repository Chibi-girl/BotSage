import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import CommonPage from "./commonpage";

function Home() {
  const data = [{
    title: "Title -1",
    desc: "Title-1 desc",
    img: "Image-1.png"
  },
  {
    title: "Title -2",
    desc: "Title-2 desc",
    img: "Image-2.png"
  },
  {
    title: "Title -3",
    desc: "Title-3 desc",
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
              {item.title}
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
