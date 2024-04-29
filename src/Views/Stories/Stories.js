import React,{useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Video from '../../Components/video./Video';


function Stories(props) {
  const [playState,setPlayState]=useState(false)

  return (
    <div>
      <Navbar/>
      <Video setPlayState={setPlayState} playState={playState}/>
    </div>
  );
}

export default Stories;

