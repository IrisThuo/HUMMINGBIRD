import React from 'react';
import TMElogo from '/home/name/HUMMINGBIRD/hummingbird/src/assets/TMElogo.png'
import Navbar from '../Navbar/Navbar';


function Header(props) {
    return (
        <Header>
            <Navbar/>
            <h1>THE MILLENIAL ENVIRONMENTALIST</h1>
            <img src={TMElogo} alt="My Logo" />
        </Header>
    );
}

export default Header;
