import React from "react";
import Footer from "../../Components/Footer/Footer";
import "../../Views/Landing/Hero.css"
import Heropic from "../../assets/Heropic.png";

import Navbar from "../../Components/Navbar/Navbar";

function Hero(props) {
  return (
    <div>

    <Navbar/>
   <div className="story-btn">

        <a href="/projects">
        <span>SEE PROJECTS</span>
        <span>SEE PROJECTS</span>
        </a>

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
            A story of Friendship,Kenyatta Universiy and Conservation Biology.The Millennial Environentalists is a group of youth aimed in conserving and advocating for the environment.

            We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

            </p>
            <p>Engage us for partnerships in sustainable climate action
            projects.</p>
            </div>
            <div className="Join-btn">
              <a href="/join"><button>Join us</button></a>
            </div>

          </div>
          <div className="Hero_section_box_left">
          <div className="planter1">
          <img src={Heropic} alt=""/>
        </div>
          </div>
       </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Hero;
