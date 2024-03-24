import React, {useState} from 'react';
import styles from './navbar.module.css';
import {AiOutlineMenu,AiOutlineClose,AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'
import TMElogo from "../../assets/TMElogo.png";
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    const [nav,setNav] = useState(false);
    return (
        <div>
        <header className={styles.navbar}>
        <img style={{marginTop:'120px'}} src={TMElogo} alt='/'></img>
        <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
        <li>
        <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
        <NavLink to='/about' >ABOUT</NavLink>
        </li>
        <li>
        <NavLink to='/hummingbird'>HUMMINGBIRD</NavLink>
        </li>
        <li>
         <AiOutlineSearch size={25}style={{marginTop:'6px'}}/>
        </li>
        <li>
        <AiOutlineUser size={25}style={{marginTop:'6px'}}/>
        </li>
        </ul>
        </nav>
        <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
         </div>
        </header>
        </div>


    );
}

export default Navbar;
