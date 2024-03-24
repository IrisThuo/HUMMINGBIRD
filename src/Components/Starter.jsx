import React from 'react';
import Pic1 from './../assets/Story3.png'
import Pic2 from './../assets/Story4.png'
import Pic3 from './../assets/aboutpic2.png'
import Pic4 from './../assets/Story5.png'
import Pic5 from './../assets/lorepic2.png'

function Starter(props) {
    return (
        <div className='max-w-[1440px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2 ' src={Pic1} alt='/'/>
                <img className='row-span-2 object-cover w-full h-full p-2 ' src={Pic2} alt='/'/>
                <img  className='row-span-2 object-cover w-full h-full p-2 'src={Pic3} alt='/'/>
                <img  className='row-span-3 object-cover w-full h-full p-2 'src={Pic4} alt='/'/>
                <img  className='row-span-2 object-cover w-full h-full p-2 'src={Pic5} alt='/'/>
            </div>

            <div className='flex flex-col h-full justify-center'>
            <h3 className='text-3xl md:text-4xl font-bold text-[#0288D1] font-serif'>HOW WE GOT STARTED</h3>
            <p className='text-2xl py-6 font-serif'>
            We design project solutions that:
             Capitalize on societal engagement through

            capacity building and advocacy and,
            Have a direct impact on the environment.</p>
            
            <p className='pb-6 font-serif'>
            The Millennial Environmentalists is a group of youth aimed in conserving and advocating for the environment.

            We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

            Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

            It is a planform for the youth to air their thoughts on how best to conserve the environment.

            It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

            Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

            Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.</p>

            </div>


        </div>
    );
}

export default Starter;
