import React  from 'react';

import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
// import styles from './contat.module.css'

function Contact(props) {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", process.env.APP_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        event.target.reset()
      }
    };
    return (
        <div>
        <div className='p-4'>
        <p className='text-center font-serif'>CONTACT US</p>

        <h3 className='text-4xl text-center font-serif text-[#0288D1] font-bold'>Get in Touch</h3>
    </div>
        <div className='flex my-[80px] mx-auto max-w-[90%] content-center justify-between'>
        <div className='basis-[48%] text-[#676767]'>

        <h3 className='font-serif text-[#000f38] font-medium text-[25px]'>Send us a message</h3>

        <p className='font-serif max-w-[450px] leading-[1.3] '> Feel free to reach out through contact form or find our contact information below. Your questions and suggestions are important to us. Lets be the change we wish to see in the world</p>
        <ul>
            <li className='font-serif  flex items-center my-[20px]'>millenialenv.org@gmail.com</li>
            <MdOutlineMail className='flex items-center w-[35px]  text-[#000f38]' />
            <li className='font-serif flex items-center my-[20px]'>+254 708 266 926</li>
            <FiPhoneCall className='flex items-center w-[35px]  text-[#000f38]'/>
            <li className='font-serif flex items-center my-[20px]'>Nairobi,Kenya</li>
            <CiLocationOn className='flex items-center w-[35px]  text-[#000f38]'/>

        </ul>
        </div>
        <div className='contact_form'>
        <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input className='block w-[100%] bg-[#EBECFE] p-[15px] border-0  outline-[0] mt-[5px] mb-[15px] resize-[0]' type='text' name='name' placeholder='Enter your name' required/>

        <label>Phone Number</label>
        <input className='block w-[100%] bg-[#EBECFE] p-[15px] border-0 outline-[0] mt-[5px] mb-[15px] resize-[0]' type='tel' name='phone' placeholder='Enter your mobile number' required/>

        <label>Write your message here</label>
        <textarea className='block w-[100%] bg-[#EBECFE] p-[15px] border-0 outline-[0] mt-[5px] mb-[15px] resize-[0]' name='message' rows='6' placeholder='Enter your message' required/>
        <button className='font-serif bg-[#73B55C] text-white' type='submit'>Submit Now</button>
        </form>
        <span>{result}</span>
    </div>
        </div>

        </div>
    );
}

export default Contact;
