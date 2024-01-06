import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "/home/name/HUMMINGBIRD/hummingbird/src/Views/About/About.css";
import aboutBanner1 from "/home/name/HUMMINGBIRD/hummingbird/src/assets/aboutBanner1.png";
import aboutpic from "/home/name/HUMMINGBIRD/hummingbird/src/assets/aboutpic.png";
import aboutpic2 from "/home/name/HUMMINGBIRD/hummingbird/src/assets/aboutpic2.png";

function About(props) {
    return (
        <div>
            <Navbar/>

                <div className='about'>
                    <div className='about_top'
                    style = {{
                        backgroundImage:
                        `url(${aboutBanner1})`
                     }}
                    >
                        <h1>ABOUT US</h1>
                    </div>

                    <div className='about_bottom'>
                     <h1>HOW WE GOT STARTED</h1>
                    <p>
                    The Millennial Environmentalists is a group of youth aimed in conserving and advocating for the environment.

                    We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

                    Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

                    It is a planform for the youth to air their thoughts on how best to conserve the environment.

                    It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

                    Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

                    Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

                    </p>
                   </div>
                    <div className='about_center_main'>
                    <div className='about_center1'>
                    <div>
                    <h1>THE MILLENIAL ENVIRONMENTALISTS</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    </div>
                    </div>

                    <div className='about_center2'>

                        <img src={aboutpic} alt=''/>

                    </div>

                    <div className='about_center3'>

                    <img src={aboutpic2} alt=''/>

                    </div>
                    <div className='about_center4'>
                    <div>
                    <h1>MORE TME LORE</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    </div>
                    </div>

                    </div>

                    <div className='about_center_bottom'>
                        <h1>HUMMINGBIRD AWARDS</h1>
                            <p>
                            The Millennial Environentalists is a group of youth aimed in conserving and advocating for the environment.

                            We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

                            Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

                            It is a planform for the youth to air their thoughts on how best to conserve the environment.

                            It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

                            Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

                            Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

                            </p>
                            <h1>TME EVOLUTION</h1>
                            <p>
                            The Millennial Environentalists is a group of youth aimed in conserving and advocating for the environment.

                            We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

                            Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

                            It is a planform for the youth to air their thoughts on how best to conserve the environment.

                            It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

                            Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

                            Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

                            </p>

                    </div>


                </div>



                     <div className='clear'></div>
            <Footer/>
        </div>
    );
}

export default About;
