import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/stories'); // Replace with your Rails API URL
        setStories(response.data);

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchStories();
  }, []);

  return (


    <div>
    <Navbar/>
      <h1>HUMMINGBIRD AWARDS</h1>
      {stories.map(story => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.content}</p>

        </div>
      ))}
      <Footer/>

    </div>
  );
};

export default Stories;
