import React, {useState} from 'react';
import {HiMenuAlt3} from 'react-icons/hi'
import { NavLink } from 'react-router-dom';
import TMElogo from './../assets/TMElogo.png'

function NavHero(props) {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        // if(!nav) {
        //     document.body.style.overflow = 'hidden'
        // }else{
        //     document.body.style.overflow = 'scroll'
        // }
        };


    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
        <img src={TMElogo} alt='/'></img>
            <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25}/>
            <div className={nav ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
            <ul className='flex flex-col w-full h-full items-center justify-center'>
            <li className='font-bold text-3xl p-8'>
            <NavLink to='/about'>About</NavLink>
            </li>
            <li className='font-bold text-3xl p-8'>
            <NavLink to='hummingbird'>HUMMINGBIRD</NavLink>
            </li>
            </ul>
            </div>
        </div>

    );
}

export default NavHero;
