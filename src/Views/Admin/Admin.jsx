
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin(props) {


        const [stories, setStories] = useState([]);

        useEffect(() => {
          const fetchStories = async () => {
            const response = await axios.get('/http://localhost:3000/stories');
            setStories(response.data);
          };
          fetchStories();
        }, []);

        return (
          <div>
            <h1>Admin Stories</h1>
            <ul>
              {stories.map(story => (
                <li key={story.id}>{story.title}</li>
              ))}
            </ul>
          </div>
        );


}

export default Admin;
