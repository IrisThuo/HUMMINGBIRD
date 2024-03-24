import React from 'react';
import Mad1 from './../assets/TMEfye.png'
import Mad2 from './../assets/Muddy.png'
import Mad3 from './../assets/kids.png'

function Info(props) {
    return (
        <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2 '>
            <h3 className='text-2xl font-bold font-serif'>ABOUT US</h3>
            <p className='pt-4 font-serif'>
            We are a society that gives youth a platform to
                    actualize their ideas on how best we can
                    achieve sustainable climate action.
            By capitalizing on social engagement, we improve
            the chances of project durability, reduced costs, and

            scalability.

            When people understand why they need to take
            action, they willingly learn how to do so, and
            eventually, they become part of the solution.

            Our projects are holistic, involving water, flora(plants)

            and fauna (animals).</p>
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-2'>
              <img className='object-over w-full h-full' src={Mad1} alt='/'/>
              <img className='row-span-2 object-over w-full h-full' src={Mad2} alt='/'/>
              <img className='object-over w-full h-full' src={Mad3} alt='/'/>
            </div>
        </div>
    );
}

export default Info;
