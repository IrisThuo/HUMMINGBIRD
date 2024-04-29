import React,{useState} from 'react';
import Bird from '../../assets/Hummingbird.png'
import Play from '../../assets/play-button.png'
import styles from './video.module.css'
import VideoPlayer from './VideoPlayer';

function Video() {
 const [playState,setPlayState]=useState(false)


    return (
        <div >
        <div className={styles.video}>
        <div className={styles.about_left}>
            <img src={Bird} alt='/' className={styles.bird_img}/>
            <img src={Play} alt='/' className={styles.play_icon} onClick={() => {setPlayState(true)}}/>
        </div>
        <div  className={styles.about_right}>
            <h3 className='text-2xl font-bold font-serif '>HUMMINGBIRDS
            <br/>
            <span className='text-[#0288D1]'>What are the hummingbird Awards?</span></h3>

            <p className='pt-4 font-serif'>
             This initiative gives
            people and organizations
            a platform to share their
            stories, engage and uses
            story telling to
            accelerate the impact of
            all climate action efforts.
            We have hosted 2
            awards and
            engaged 132
            individuals and
            organizations across
            Kenya.</p>
           <a href='https://shorturl.at/abhM7'> <button className='font-serif bg-[#73B55C] text-white'>Share your story</button></a>
        </div>
        </div>
        <VideoPlayer setPlayState={setPlayState} playState={playState}/>
        </div>
    );
}

export default Video;
