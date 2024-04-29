import React from 'react';

import Bird from '../../assets/hummingbird.mp4'

function VideoPlayer({playState, setPlayState}) {
    return (
        <div>
        <div className={`${playState} ? '' : 'invisible'`}>
            <video className='w-[90%] max-w-[900px] border-4 border-[#fff] ' src={Bird} autoPlay muted controls></video>
        </div>

        </div>
    );
}

export default VideoPlayer;
