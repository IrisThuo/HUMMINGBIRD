import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import ImageSlider from '../../Components/ImageSlider';
import Starter from '../../Components/Starter';
import Info from '../../Components/Info';
import Partners from '../../Components/Partners/Partners';
import Work from '../../Components/Work';
import Footer from '../../Components/Footer/Footer';


function About(props) {

    return (
        <div>
            <Navbar/>
            <ImageSlider/>
            <Work/>
            <Starter/>
            <Info/>
            <Partners/>
            <Footer/>
        </div>
    );
}

export default About;
