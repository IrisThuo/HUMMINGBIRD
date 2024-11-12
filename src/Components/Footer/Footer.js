import React from "react";
import "../../Components/Footer/Footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";


 function Footer(props) {
    return (
      <footer className='bg-sky-500 px-2 md:px-8 lg:px-14 py-2'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
         <div>
            <h2 className='text-sm text-white font-bold mb-1'>
            BE BOLD,BE PART OF THE SOLUTION
            </h2>
         </div>
         <div>
            <h2 className='text-sm text-white font-bold mb-1'>Quick links</h2>
            <ul>
               <li><a href="https://www.themillennialenvironmentalists.com/" className='text-sm hover:underline text-gray-300'>Home</a></li>
               <li><a href="https://www.themillennialenvironmentalists.com/about" className='text-sm hover:underline text-gray-300'>About</a></li>
               <li><a href="https://www.themillennialenvironmentalists.com/hummingbird" className='text-sm hover:underline text-gray-300'>Hummingbird</a></li>
            </ul>
         </div>

         <div>
            <h2 className='text-sm text-white font-bold mb-1'>Resources</h2>
            <ul>
               <li><a href="https://miti.co.ke/" className='text-sm hover:underline text-gray-300'>MITI ALLIANCE</a></li>
               <li><a href="https://www.pmikenya.com/" className='text-sm hover:underline text-gray-300'>PROJECT MANAGEMENT INSTITUTE</a></li>
               <li><a href="https://www.seedballskenya.com/" className='text-sm hover:underline text-gray-300'>SEED BALLS KENYA</a></li>
            </ul>
         </div>

         <div>
            <h2 className='text-sm text-white font-bold mb-1'>Partners</h2>
            <ul>
               <li><a href="https://www.nema.go.ke/"className='text-sm hover:underline text-gray-300'>NEMA</a></li>
               <li><a href="https://www.kasneb.or.ke/" className='text-sm hover:underline text-gray-300'>KASNEB</a></li>
               <li><a href="https://sawmillers.kenyaforestservice.org/partner" className='text-sm hover:underline text-gray-300'>KFS</a></li>
               <li><a href="https://sportsviewhotel.com/s/" className='text-sm hover:underline text-gray-300'>SPORTSVIEW HOTEL</a></li>
            </ul>
         </div>

         <div className="sb_footer-links_div">
            <h2 className='text-lg font-bold mb-4'>Follow Us</h2>
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
         
      </footer>
    );
 }

 export default Footer;

