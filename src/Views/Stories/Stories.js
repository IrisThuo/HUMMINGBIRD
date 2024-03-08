import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "../../Views/Stories/Stories.css";
import Story1 from "../../assets/Story1.png";
import Story2 from "../../assets/Story2.png";
import Story3 from "../../assets/Story3.png";
import Story4 from "../../assets/Story4.png";
import Story5 from "../../assets/Story5.png";


function Stories() {
    return (
        <div>
            <Navbar/>
            <div className='Heading'>
            <h2>Read Some Of Our favourite Stories</h2>
            </div>
            <div className='body'>
            <div className='card_container'>
            <div className='img_container'>
                <img src={Story1} alt=''/>
            </div>
            <div className='card_content'>
                <div className='card_title'>
                     <h3>Card Title</h3>
                </div>
                <div className='card_body'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className='btn'>
                    <button>
                        <a href='/story'>
                             Read more
                        </a>
                    </button>
                </div>
            </div>
        </div>

        <div className='card_container'>
        <div className='img_container'>
            <img src={Story2} alt=''/>
        </div>
        <div className='card_content'>
            <div className='card_title'>
                 <h3>Card Title</h3>
            </div>
            <div className='card_body'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className='btn'>
                <button>
                    <a href='/story'>
                         Read more
                    </a>
                </button>
            </div>
        </div>
    </div>

    <div className='card_container'>
    <div className='img_container'>
        <img src={Story3} alt=''/>
    </div>
    <div className='card_content'>
        <div className='card_title'>
             <h3>Card Title</h3>
        </div>
        <div className='card_body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='btn'>
            <button>
                <a href='/story'>
                     Read more
                </a>
            </button>
        </div>
    </div>
</div>

<div className='card_container'>
<div className='img_container'>
    <img src={Story4} alt=''/>
</div>
<div className='card_content'>
    <div className='card_title'>
         <h3>Card Title</h3>
    </div>
    <div className='card_body'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
    <div className='btn'>
        <button>
            <a href='/story'>
                 Read more
            </a>
        </button>
    </div>
</div>
</div>

<div className='card_container'>
<div className='img_container'>
    <img src={Story5} alt=''/>
</div>
<div className='card_content'>
    <div className='card_title'>
         <h3>Card Title</h3>
    </div>
    <div className='card_body'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit magna a semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
    <div className='btn'>
        <button>
            <a href='/story'>
                 Read more
            </a>
        </button>
    </div>
</div>
</div>
        </div>
            <Footer/>
            </div>
    );
}

export default Stories;
