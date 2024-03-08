import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../../Components/Navbar/navbar.css" ;
import TMElogo from "../../assets/TMElogo.png";

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
<>
       <nav>
       <div className="logo">
       <img src={TMElogo} alt=""/>
         </div>
         <h4>THE MILLENNIAL ENVIRONMENTALIST</h4>
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
            <NavLink to="/projects">PROJECTS</NavLink>
            </li>
            <li>
            <NavLink to="/about">ABOUT</NavLink>
            </li>
        </ul>

         </nav>



</>
    );
}

export default Navbar;
