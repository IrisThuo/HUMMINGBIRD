import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "/home/name/HUMMINGBIRD/hummingbird/src/Components/Navbar/navbar.css" ;
import TMElogo from "/home/name/HUMMINGBIRD/hummingbird/src/assets/TMElogo.png";

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    return (

       <nav>

       <div className="sb_footer-links_div">
              <div className="logo">
                <p><img src={TMElogo} alt=""/></p>
              </div>
          </div>
        
       <h4>THE MILLENIAL ENVIRONMENTALIST</h4>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
            <NavLink to="/">HOME</NavLink>
            </li>
            <li>
            <NavLink to="/stories">STORIES</NavLink>
            </li>
            <li>
            <NavLink to="/about">ABOUT</NavLink>
            </li>
        </ul>

       </nav>


    );
}

export default Navbar;
