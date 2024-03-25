import React from 'react';
import Navbar from '../Navbar/Navbar';

import mpesa from '../../assets/MPESA.png'


function Join(props) {

    return (
        <div>
        <Navbar/>
        <div className='my-[100px] text-center bg-black/30 rounded-[10px]'>
           <h3 className='text-4xl font-serif'>TO BECOME A MEMBER</h3>

           <p className='font-serif text-[#0288D1]'>For More Info feel free to reach out @<a href="tel:+254704 924 706">+254 704 924 706</a></p>
        </div>
        <div>
            <h3  className='text-4xl font-serif text-center'>Support us</h3>
            <p className='font-serif text-center text-[#0288D1]'>Contribute through donations or partnerships</p>
            <div className="flex flex-col items-center py-4 px-2 space-y-4 ">
            <img
              className="w-[100] h-[100] rounded-full"
              src={mpesa}
              alt="/"
            />
            <h3 className="font-semibold">till Number <a href="tel:589 403">589 403</a></h3>

          </div>
        </div>
        </div>
    );
}

export default Join;

