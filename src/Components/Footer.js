 import React from 'react';

 function Footer(props) {
    return (
     <div className='footer'>
      <div className='sb_footer_section_padding'>
        <div className='sb_footer-links'>

  {/*part a of footer links */}
          <div className='sb_footer-links-div'>
            <h4>For Business</h4>
            <a href=''>
             <p>Contact</p>
            </a>
            <a href=''>
            <p>Email</p>
            </a>
            <a href=''>
            <p>Address</p>
            </a>

  {/* part b of footer links*/}
        <div className='sb_Footer-inks_div'>
        <h4>Partners</h4>
        <a href=''>
        <p>Partner A</p>
       </a>
       <a href=''>
       <p>Partner B</p>
      </a>
      <a href=''>
      <p>Partner c</p>
     </a>
        </div>

  {/* part c of footer links */}
        <div className='sb_Footer-links_div'>
          <h4>Resources</h4>
          <a href=''>
           <p>Resource A</p>
          </a>
          <h4>Resources</h4>
          <a href=''>
           <p>Resource B</p>
          </a>
          <h4>Resources</h4>
          <a href=''>
           <p>Resource C</p>
          </a>
        </div>

  {/* part d of footer */}
        <div className='sb_Footer-links_div'>
        <h4>Company</h4>
        <a href=''>
         <p>Home</p>
        </a>
        <a href=''>
        <p>About</p>
        </a>
        <a href=''>
        <p>Events</p>
        </a>
        </div>

  {/* icon part of footer */}
        <div className='socialmedia'>
         <p><img src={linkedin} alt=''/></p>
         <p><img src={insta} alt=''/></p>
         <p><img src={fb} alt=''/></p>
         <p><img src={twitter} alt=''/></p>
        </div>

  {/* remember to add icons to assets */}
          </div>
        </div>
      </div>
     </div>

    );
 }

 export default Footer;
