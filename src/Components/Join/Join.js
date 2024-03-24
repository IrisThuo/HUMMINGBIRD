import React from 'react';
import Navbar from '../Navbar/Navbar';

import "../../Components/Join/Join.css";

function Join(props) {

    return (
        <div>
        <Navbar/>
        <div className='my-[100px] text-center bg-black/30 rounded-[10px]'>
           <h3 className='text-4xl font-serif'>TO BECOME A MEMBER</h3>

           <p className='font-serif text-[#0288D1]'>For More Info feel free to reach out @+254704 924 706</p>
        </div>
        <div>
            <h3  className='text-4xl font-serif text-center'>Support us</h3>
            <p className='font-serif text-center'>Help us through donations or partnerships</p>
        </div>
        </div>
    );
}

export default Join;

