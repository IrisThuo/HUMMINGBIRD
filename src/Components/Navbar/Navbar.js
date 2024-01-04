import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
       <nav>
        <ul>
            <li>
            <Link to="/">HOME</Link>
            </li>
            <li>
            <Link to="/stories">STORIES</Link>
            </li>
            <li>
            <Link to="/about">ABOUT</Link>
            </li>
        </ul>
       </nav>
    );
}

export default Navbar;
