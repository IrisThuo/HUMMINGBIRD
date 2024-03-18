import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Story1 from "../../assets/Story1.png";
import Story2 from "../../assets/Story2.png";
import Story3 from "../../assets/Story3.png";
import Story4 from "../../assets/Story4.png";
import "../../Views/Projects/Project.css";

function Projects(props) {
    return (
        <div>
            <Navbar/>
            <div className='Heading'>
            <h2>Our Recent Projects</h2>
            </div>
            <div className='body'>
            <div className='card_container'>
            <div className='img_container'>
                <img src={Story1} alt=''/>
            </div>
            <div className='card_content'>
                <div className='card_title'>
                     <h3>THE SCHOOL TREE PROGRAM</h3>
                </div>
                <div className='card_body'>
                    <p>Growing trees in schools and mentoring clubs on sustainable innovation and problem solving.</p>
                </div>
               {/* <div className='btn'>
                    <button>
                        <a href='/story'>
                             Read more
                        </a>
                    </button>
                </div>*/}
            </div>
        </div>

        <div className='card_container'>
        <div className='img_container'>
            <img src={Story2} alt=''/>
        </div>
        <div className='card_content'>
            <div className='card_title'>
                 <h3>COASTAL REESTORATION</h3>
            </div>
            <div className='card_body'>
                <p>This initiative
partners with local
coastal organizations
towards restoring the
environment in the
area</p>
            </div>
         {/*  <div className='btn'>
                <button>
                    <a href='/story'>
                         Read more
                    </a>
                </button>
            </div>*/}
        </div>
    </div>

    <div className='card_container'>
    <div className='img_container'>
        <img src={Story3} alt=''/>
    </div>
    <div className='card_content'>
        <div className='card_title'>
             <h3>ASALS REJUVINATION</h3>
        </div>
        <div className='card_body'>
            <p>This initiative
            partners with local
            communities and
            societies in arid and
            semi-arid areas in
            climate action and
            mitigation.</p>
        </div>
       {/* <div className='btn'>
            <button>
                <a href='/story'>
                     Read more
                </a>
            </button>
        </div>*/}
    </div>
</div>

<div className='card_container'>
<div className='img_container'>
    <img src={Story4} alt=''/>
</div>
<div className='card_content'>
    <div className='card_title'>
         <h3>ECO-TOURISM</h3>
    </div>
    <div className='card_body'>
        <p>This initiative functions
        to fuel interest and
        awareness amongst the
        public through tourism
        and the rejuvenation of
        protected areas.</p>
    </div>
   {/* <div className='btn'>
        <button>
            <a href='/story'>
                 Read more
            </a>
        </button>
    </div>*/}
</div>
</div>



        </div>
            <Footer/>
        </div>
    );
}

export default Projects;
