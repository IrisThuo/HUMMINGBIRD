import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "/home/name/HUMMINGBIRD/hummingbird/src/Views/Landing/Hero.css"
import HeroPic from "/home/name/HUMMINGBIRD/hummingbird/src/assets/HeroPic.png";


function Hero(props) {
  return (
    <div>
    <Navbar/>

    <div className="story-btn">
        <a href="/stories">View Stories</a>
    </div>
    
    <div className="Hero_section">
       <div className="Hero_section_box">
          <div className="Hero_section_box_right">
           <div class = "vertical"></div>
            <h1><a href="/about">HOW WE GOT STARTED</a></h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <div className="Join-btn">
              <button>Join us</button>
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
