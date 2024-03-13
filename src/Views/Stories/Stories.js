import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.example.com/posts'); // Replace with API endpoint
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>HUMMINGBIRD AWARDS</h1>
      {stories.map(story => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.body}</p>
          <button onClick={() => viewStory(story.id)}>Read More</button>
          <button onClick={() => vote(story.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default Stories;

