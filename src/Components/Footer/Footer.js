import React from "react";
import "/home/name/HUMMINGBIRD/hummingbird/src/Components/Footer/Footer.css";
import facebook from "/home/name/HUMMINGBIRD/hummingbird/src/assets/facebook.png";
import instagram from "/home/name/HUMMINGBIRD/hummingbird/src/assets/instagram.png";
import linkedin from "/home/name/HUMMINGBIRD/hummingbird/src/assets/linkedin.png";
import twitter from "/home/name/HUMMINGBIRD/hummingbird/src/assets/twitter.png";


 function Footer(props) {
    return (
      <>
      <div class="clear"></div>
      <div className="footer">

        <div className="sb_footer section_padding">
           <div className="sb_footer-links">
            {/*<div className="sb_footer-links_div">
              <h4>For Business</h4>
                <a href="/employer">
                  <p>Employer</p>
                </a>
                <a href="/employer">
                  <p>Employer</p>
                </a>
                <a href="/employer">
                  <p>Employer</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Resources</h4>
                <a href="/resource">
                 <p>Resources</p>
                </a>
                <a href="/resource">
                  <p>Resources</p>
                </a>
                <a href="/resource">
                  <p>Resources</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Partners</h4>
                <a href="/partner">
                  <p>Partner</p>
                </a>
                <a href="/partner">
                  <p>Partner</p>
                </a>
                <a href="/partner">
                  <p>Partner</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>T.M.E</h4>
                <a href="/">
                  <p>Home</p>
                </a>
                <a href="/about">
                  <p>About</p>
                </a>
                <a href="/stories">
                  <p>Stories</p>
                </a>
    </div>*/}
          <div className="sb_footer-links_div">
              <div className="socialmedia">
                <p><img src={facebook} alt=""/></p>
                <p><img src={instagram} alt=""/></p>
                <p><img src={linkedin} alt=""/></p>
                <p><img src={twitter} alt=""/></p>
              </div>
          </div>
          </div>

          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>
                @{new Date().getFullYear()} TME. All rights reserved.
              </p>
            </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy Policy</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
          </div>

        </div>
      </div>
      </>
    );
 }

 export default Footer;
