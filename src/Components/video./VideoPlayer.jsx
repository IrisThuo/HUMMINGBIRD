import React from 'react';
import styles from './video.module.css'
import Bird from '../../assets/hummingbird.mp4'

function VideoPlayer({playState, setPlayState}) {
    return (
        <div>
        <div className={`${styles.video_player} ${playState ? '' : 'hidden'}`}>
            <video className='w-[90%] max-w-[900px] border-4 border-[#fff] ' src={Bird} autoPlay muted controls></video>
        </div>

        </div>
    );
}

export default VideoPlayer;
