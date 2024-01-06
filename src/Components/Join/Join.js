import React , {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "/home/name/HUMMINGBIRD/hummingbird/src/Components/Join/Join.css";

function Join(props) {
    const [buttonOpen, setbuttonOpen] = useState(false)
    return (
        <div>
            <Navbar/>
                <div className='Heading_title'>
                 <h2>WELCOME!</h2>
                </div>
                <div className='join_us1'>
                <h1>Plan 1</h1>
               <p>
               The Millennial Environmentalists is a group of youth aimed in conserving and advocating for the environment.

               We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

               Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

               It is a planform for the youth to air their thoughts on how best to conserve the environment.

               It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

               Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

               Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

               </p>

               <div className='btn_join' onClick={() => {
                setbuttonOpen(!buttonOpen)
                }}>
                    contact us on +25470200300
               </div>
              </div>
              <div className='join_us2'>
                <h1>Plan 2</h1>
               <p>
               The Millennial Environmentalists is a group of youth aimed in conserving and advocating for the environment.

               We are a group of young pro-active Africans whose lives and careers are tied to the sustainable use of environmental resources.

               Our main aim is to rehabilitate the earth's green and create awareness for our biotic and abiotic resources as we also enjoy natures captivating beauty and gifts through tours and travels.

               It is a planform for the youth to air their thoughts on how best to conserve the environment.

               It is geared to sustainable use of the environment through: Greening the environment, waste management, water conservation and public sensitisation on sustainable use and maintenanceof the environment.

               Road trips to protected areas and biodiversity hotspots around the country is a tool the organization plans to utilize in order to practically engage the youth on environmental matters.

               Unity is strength thus the organization plans to focus on partnerships with stakeholders in the environmental protection agenda in order to achieve.

               </p>

               <div className='btn_join' onClick={() => {
                setbuttonOpen(!buttonOpen)
                }}>
                    contact us on +25470200300
               </div>
               
              </div>
            <Footer/>
        </div>
    );
}

export default Join;
