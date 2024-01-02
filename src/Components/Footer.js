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
        <h4>Resources and Partners</h4>
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


          </div>
        </div>
      </div>
     </div>

    );
 }

 export default Footer;
