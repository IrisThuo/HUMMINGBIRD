import React from "react";
import "/home/name/HUMMINGBIRD/hummingbird/src/Components/Footer/Footer.css";
import facebook from "/home/name/HUMMINGBIRD/hummingbird/src/assets/facebook.png";
import instagram from "/home/name/HUMMINGBIRD/hummingbird/src/assets/instagram.png";
import linkedin from "/home/name/HUMMINGBIRD/hummingbird/src/assets/linkedin.png";
import twitter from "/home/name/HUMMINGBIRD/hummingbird/src/assets/twitter.png";


 function Footer(props) {
    return (
      <>

      <div className="footer">

        <div className="sb_footer section_padding">
           <div className="sb_footer-links">
            <div className="sb_footer-links_div">
              <h4>BE BOLD,BE PART OF THE SOLUTION</h4>
                <a href="https://mail.google.com/mail/u/0/">
                  <p>millenialenv.org@gmail.com</p>
                </a>

            </div>
            <div className="sb_footer-links_div">
              <h4>Resources</h4>
                <a href="https://miti.co.ke/">
                 <p>MITI ALLIANCE</p>
                </a>
                <a href="https://www.pmikenya.com/">
                  <p>PROJECT MANAGEMENT INSITUTE</p>
                </a>
                <a href="https://www.seedballskenya.com/">
                  <p>SEED BALLS KENYA</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Partners</h4>
                <a href="https://www.nema.go.ke/">
                  <p>NEMA</p>
                </a>
                <a href="https://www.kasneb.or.ke/">
                  <p>KASNEB</p>
                </a>
                <a href="https://sawmillers.kenyaforestservice.org/partner">
                  <p>KFS</p>
                </a>
                <a href="https://sportsviewhotel.com/s/">
                <p>SPORTSVIEW HOTEL</p>
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
    </div>
          <div className="sb_footer-links_div">
              <div className="socialmedia">
                <p><a href="https://www.facebook.com/profile.php?id=100066730744869"><img src={facebook} alt=""/></a></p>
                <p><a href="https://www.instagram.com/themillennialenvironmentalists/"><img src={instagram} alt=""/></a></p>
                <p><a href="https://www.linkedin.com/in/millennial-environmentalist-0179a4206/"><img src={linkedin} alt=""/></a></p>
                <p><a href="https://twitter.com/TME_254"><img src={twitter} alt=""/></a></p>
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
