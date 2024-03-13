
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Members(props) {
    const [members, setMembers] = useState([]);

    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const response = await axios.get('http://localhost:3000/members'); // Replace with your API URL
          setMembers(response.data);
        } catch (error) {
          console.error('Error fetching members:', error);
        }
      };

      fetchMembers();
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

    return (
      <Slider {...settings}>
        {members.map(member => (
          <div key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            {/* Add more member details as needed */}
          </div>
        ))}
      </Slider>
    );
}

export default Members;
