import React from 'react';
import styles from './video.module.css'
import Bird from '../../assets/hummingbird.mp4'

function VideoPlayer({playState, setPlayState}) {
    return (
        <div>
        <div className={`${styles.video_player} ${playState ? '' : `${styles.hide}`}`}>
            <video src={Bird} autoPlay muted controls></video>
        </div>

        </div>
    );
}

export default VideoPlayer;
