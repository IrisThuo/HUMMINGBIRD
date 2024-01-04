import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "/home/name/HUMMINGBIRD/hummingbird/src/Components/Navbar/navbar.css" ;

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    return (

       <nav>

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
