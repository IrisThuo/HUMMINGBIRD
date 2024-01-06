import React from "react";
import Footer from "../../Components/Footer/Footer";
import "/home/name/HUMMINGBIRD/hummingbird/src/Views/Landing/Hero.css"
import HeroPic from "/home/name/HUMMINGBIRD/hummingbird/src/assets/HeroPic.png";
import ballot from "/home/name/HUMMINGBIRD/hummingbird/src/assets/ballot.png";
import Navbar from "../../Components/Navbar/Navbar";

function Hero(props) {
  return (
    <div>

    <Navbar/>
   <div className="story-btn">
        <img className="vote" src={ballot} alt=""/>
        <a href="/stories">Read some of our  favourite stories</a>
    </div>


    <div className="Hero_section">
       <div className="Hero_section_box">
          <div className="Hero_section_box_right">

          <div class = "vertical">
           <h1><a href="/about">HOW WE GOT STARTED</a></h1>
           </div>
           <br></br>
            <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            </div>
            <div className="Join-btn">
              <a href="/join"><button>Join us</button></a>
            </div>

          </div>
          <div className="Hero_section_box_left">
          <div className="planter1">
          <img src={HeroPic} alt=""/>
        </div>
          </div>
       </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Hero;
