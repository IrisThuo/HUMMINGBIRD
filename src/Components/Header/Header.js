import React from 'react';
import TMElogo.png from 'src/assets/TMElogo.png';
import Navbar from 'src/Components/Navbar/Navbar.js';


function Header(props) {
    return (
        <Header>
            <Navbar/>
            <h1>THE MILLENIAL ENVIRONMENTALIST</h1>
            <img src={TMElogo.png} alt="My Logo" />
        </Header>
    );
}

export default Header;
