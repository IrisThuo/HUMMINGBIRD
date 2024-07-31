import React from 'react';
import styles from './hero.module.css';


import Members from '../../Components/Members/Members';
import Origins from '../../Components/origins/Origins';
import { NavLink } from 'react-router-dom';
import NavHero from '../../Components/NavHero';
import Contact from '../../Components/contact/Contact';



function Hero(props) {
    return (
    <>
        <NavHero/>
        <div className={styles.hero}>
        <div className='bg-black/50 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>The Millennial Environmentalists</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl '>HOW WE GOT STARTED</h1>
                <p>A story of Friendship,Kenyatta Universiy and Conservation Biology.The Millennial Environentalists is a group of youth aimed in conserving and advocating for the environment.

                We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.</p>
                <NavLink to="/about"><button className='bg-[#0288D1] text-black'>See More</button></NavLink>
            </div>
    </div>
        </div>
        <Members/>
        <Origins/>
        <Contact/>

    </>
    );
}

export default Hero;
